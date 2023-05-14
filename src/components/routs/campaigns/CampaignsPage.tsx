import React, { useMemo, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import styled from "styled-components";
import moment from "moment";
import {
  allCampaigns,
  allNotifications,
  getAddressesByCampaign,
} from "../../../mocks/mocks";
import { Menu } from "../../Menu";
import { Container } from "../../ui/Container";
import { Title } from "../../ui/Title";
import { MobileMenu } from "../../MobileMenu";
import { ContentContainer } from "../../ui/ContentContainer";
import { Table } from "../../ui/Table/Table";
import { TableHead } from "../../ui/Table/TableHead";
import { TableCell } from "../../ui/Table/TableCell";
import { TableRow } from "../../ui/Table/TableRow";
import { ReactComponent as ArrowSvg } from "../../../assets/arrow.svg";
import { Input } from "../../ui/Input";
import { ReactComponent as SearchSvg } from "../../../assets/icons/search-icon.svg";
import { ReactComponent as InfoSvg } from "../../../assets/icons/info-icon.svg";
import { Blank } from "../../ui/Table/Blank";
import { Campaign, CampaignStatus } from "../../../domain/Campaign";
import { Tooltip } from "../../ui/Tooltip";
import {
  CompanyNotificationType,
  CourierNotificationType,
} from "../../../domain/Notifications";
import { Source } from "../../../domain/Source";
import { Dropdown, Option } from "../../ui/Dropdown";

const CampaignsPage = () => {
  const intl = useIntl();

  const [searchText, setSearchText] = useState("");

  const options = Object.values(CampaignStatus).map((v) => ({
    label: intl.formatMessage(
      { id: "campaigns.fields.statuses" },
      { status: v }
    ),
    value: v,
  }));
  const [selectedStatus, setSelectedStatus] = useState<Option | undefined>();
  const [dateStart, setDateStart] = useState<string>("");
  const [dateEnd, setDateEnd] = useState<string>("");

  const [startDateSortDir, setStartDateSortDir] = useState<boolean | undefined>(
    undefined
  );
  const [endDateSortDir, setEndDateSortDir] = useState<boolean | undefined>(
    undefined
  );

  const currentCampaigns = useMemo(() => {
    let result = allCampaigns;
    if (startDateSortDir !== undefined) {
      result = result.sort((a, b) =>
        // eslint-disable-next-line no-nested-ternary
        a.dateStart < b.dateStart
          ? startDateSortDir
            ? 1
            : -1
          : startDateSortDir
          ? -1
          : 1
      );
    }
    if (endDateSortDir !== undefined) {
      result = result.sort((a, b) =>
        // eslint-disable-next-line no-nested-ternary
        a.dateEnd < b.dateEnd
          ? endDateSortDir
            ? 1
            : -1
          : endDateSortDir
          ? -1
          : 1
      );
    }
    if (searchText.length) {
      result = result.filter(
        (campaign) =>
          campaign.name
            ?.toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase()) ||
          getAddressesByCampaign(campaign).find((a) =>
            a.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
          ) ||
          campaign.company.name
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
      );
    }
    if (dateStart && dateEnd) {
      result = result.filter(
        (c) => c.dateStart >= moment(dateStart) && c.dateEnd <= moment(dateEnd)
      );
    }
    if (selectedStatus) {
      result = result.filter((c) => c.status === selectedStatus.value);
    }
    return result;
  }, [
    dateEnd,
    dateStart,
    endDateSortDir,
    searchText,
    selectedStatus,
    startDateSortDir,
  ]);

  const changeDateStartSortDir = () => {
    setEndDateSortDir(undefined);
    setStartDateSortDir(!startDateSortDir);
  };
  const changeDateEndSortDir = () => {
    setStartDateSortDir(undefined);
    setEndDateSortDir(!endDateSortDir);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const getCancelledBy = (campaign: Campaign) => {
    const notification = allNotifications.filter(
      (n) =>
        n.campaign.id === campaign.id &&
        (n.type === CourierNotificationType.CAMPAIGN_CANCELLED ||
          n.type === CompanyNotificationType.CAMPAIGN_CANCELLED)
    )[0];
    return notification.type === CourierNotificationType.CAMPAIGN_CANCELLED
      ? Source.COMPANY
      : Source.COURIER;
  };

  return (
    <StyledContainer>
      <Menu />
      <StyledContentContainer vertical gap={50} menu>
        <Container vertical gap={5}>
          <Title>
            <FormattedMessage id="campaigns.title" />
          </Title>
          <Count>
            <FormattedMessage
              id="campaigns.count"
              values={{
                count: <ValuationsCount>{allCampaigns.length}</ValuationsCount>,
              }}
            />
          </Count>
        </Container>
        <Container vertical gap={30}>
          <FiltersContainer gap={30}>
            <Dropdown
              placeholder={intl.formatMessage({
                id: "campaigns.fields.status",
              })}
              value={selectedStatus}
              options={options}
              onChange={setSelectedStatus}
            />
            <DoubleContainer gap={10}>
              <Container vertical gap={5}>
                <Label>
                  <FormattedMessage id="campaigns.filters.date" />
                </Label>
                <DateInput
                  type="date"
                  value={dateStart}
                  onChange={setDateStart}
                />
              </Container>
              <DateInput type="date" value={dateEnd} onChange={setDateEnd} />
            </DoubleContainer>
            <SearchContainer>
              <SearchInput
                placeholder={intl.formatMessage({
                  id: "campaigns.filters.text",
                })}
                leftIcon={<SearchIcon />}
                value={searchText}
                onChange={setSearchText}
              />
            </SearchContainer>
          </FiltersContainer>
          {!currentCampaigns.length && (
            <EmptyText>
              <FormattedMessage id="campaigns.empty" />
            </EmptyText>
          )}
          <Container vertical gap={5}>
            <CurrentCount>
              <FormattedMessage
                id="campaigns.current.count"
                values={{
                  count: (
                    <ValuationsCount>{currentCampaigns.length}</ValuationsCount>
                  ),
                }}
              />
            </CurrentCount>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <FormattedMessage id="campaigns.fields.id" />
                  </TableCell>
                  <TableCell>
                    <FormattedMessage id="campaigns.fields.name" />
                  </TableCell>
                  <TableCell>
                    <FormattedMessage id="campaigns.fields.companyId" />
                  </TableCell>
                  <TableCell>
                    <FormattedMessage id="campaigns.fields.courierId" />
                  </TableCell>
                  <TableCell onClick={changeDateStartSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="campaigns.fields.dateStart" />
                      {startDateSortDir !== undefined && (
                        <ArrowIcon desc={startDateSortDir} />
                      )}
                    </Container>
                  </TableCell>
                  <TableCell onClick={changeDateEndSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="campaigns.fields.dateEnd" />
                      {endDateSortDir !== undefined && (
                        <ArrowIcon desc={endDateSortDir} />
                      )}
                    </Container>
                  </TableCell>
                  <TableCell>
                    <FormattedMessage id="campaigns.fields.towns" />
                  </TableCell>
                  <TableCell>
                    <FormattedMessage id="campaigns.fields.status" />
                  </TableCell>
                </TableRow>
              </TableHead>
              {currentCampaigns.map((c, index) => (
                <TableRow key={index}>
                  <TableCell>{c.id}</TableCell>
                  <TableCell>{c.name}</TableCell>
                  <TableCell>{c.company.id}</TableCell>
                  <TableCell>{c.courier?.id || <Blank />}</TableCell>
                  <TableCell>{c.dateStart.format("L")}</TableCell>
                  <TableCell>{c.dateEnd.format("L")}</TableCell>
                  <TableCell>
                    {Array.from(
                      new Set(getAddressesByCampaign(c).map((a) => a.town))
                    )}
                  </TableCell>
                  <TableCell>
                    <Container gap={5}>
                      {intl.formatMessage(
                        { id: "campaigns.fields.statuses" },
                        { status: c.status }
                      )}
                      {c.status === CampaignStatus.CANCELLED && (
                        <Tooltip
                          content={intl.formatMessage(
                            { id: "campaigns.cancelled.by" },
                            { source: getCancelledBy(c) }
                          )}
                        >
                          <InfoIcon />
                        </Tooltip>
                      )}
                    </Container>
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </Container>
        </Container>
      </StyledContentContainer>
      <MobileMenu />
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  @media (max-width: 700px) {
    height: calc(100vh - 80px);
    justify-content: space-between;
    flex-direction: column;
  }
`;

const StyledContentContainer = styled(ContentContainer)`
  @media (max-width: 700px) {
    gap: 20px;
  }
`;

const EmptyText = styled.div`
  color: white;
`;
const Count = styled.div`
  color: white;
  font-size: 18px;
`;

const ValuationsCount = styled.span`
  font-weight: bold;
`;

const CurrentCount = styled.span`
  color: white;
  font-size: 18px;
`;

const ArrowIcon = styled(ArrowSvg)<{ desc: boolean }>`
  ${(props) => (!props.desc ? "transform: rotate(180deg)" : "")};
  height: 14px;
  width: 14px;
  align-self: center;
`;

const SearchInput = styled(Input)`
  align-self: flex-end;
  min-width: 360px;
`;

const SearchIcon = styled(SearchSvg)`
  height: 24px;
  width: 24px;
  margin-left: 5px;
`;

const InfoIcon = styled(InfoSvg)`
  height: 17px;
  width: 17px;
  cursor: pointer;
  align-self: center;
`;

const SearchContainer = styled(Container)`
  min-width: 360px;
`;

const DoubleContainer = styled(Container)`
  align-items: flex-end;
`;

const Label = styled.div`
  color: white;
  font-size: 14px;
`;

const DateInput = styled(Input)`
  margin-left: -5px;
  align-self: flex-end;
`;

const FiltersContainer = styled(Container)`
  align-items: flex-end;
`;

export { CampaignsPage };
