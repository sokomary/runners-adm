import React, { useMemo, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import styled from "styled-components";
import {
  allCampaignAddresses,
  allCompanies,
  allCouriers,
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
import { Blank } from "../../ui/Table/Blank";

const TownsPage = () => {
  const intl = useIntl();

  const allTowns = Array.from(
    new Set([
      ...allCampaignAddresses.map((ca) => ca.address.town),
      ...allCompanies.map((c) => c.town),
      ...allCouriers.map((c) => c.towns.split(",")).flat(1),
    ])
  ).map((town) => ({
    town,
    companies: allCompanies.filter((c) => c.town === town),
    couriers: allCouriers.filter((c) => c.towns.includes(town)),
    campaigns: allCampaignAddresses
      .filter((ca) => ca.address.town === town)
      .map((ca) => ca.campaign),
  }));

  const [searchText, setSearchText] = useState("");

  const [companiesSortDir, setCompaniesSortDir] = useState<boolean | undefined>(
    undefined
  );
  const [campaignsSortDir, setCampaignsSortDir] = useState<boolean | undefined>(
    undefined
  );
  const [couriersSortDir, setCouriersSortDir] = useState<boolean | undefined>(
    undefined
  );

  const currentTowns = useMemo(() => {
    let result = allTowns;
    if (companiesSortDir !== undefined) {
      result = result.sort((a, b) =>
        // eslint-disable-next-line no-nested-ternary
        a.companies.length < b.companies.length
          ? companiesSortDir
            ? 1
            : -1
          : companiesSortDir
          ? -1
          : 1
      );
    }
    if (campaignsSortDir !== undefined) {
      result = result.sort((a, b) =>
        // eslint-disable-next-line no-nested-ternary
        a.campaigns.length < b.campaigns.length
          ? campaignsSortDir
            ? 1
            : -1
          : campaignsSortDir
          ? -1
          : 1
      );
    }
    if (couriersSortDir !== undefined) {
      result = result.sort((a, b) =>
        // eslint-disable-next-line no-nested-ternary
        a.couriers.length < b.couriers.length
          ? couriersSortDir
            ? 1
            : -1
          : couriersSortDir
          ? -1
          : 1
      );
    }
    if (searchText.length) {
      result = result.filter((t) =>
        t.town.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
      );
    }
    return result;
  }, [
    allTowns,
    campaignsSortDir,
    companiesSortDir,
    couriersSortDir,
    searchText,
  ]);

  const changeCompaniesSortDir = () => {
    setCampaignsSortDir(undefined);
    setCouriersSortDir(undefined);
    setCompaniesSortDir(!companiesSortDir);
  };
  const changeCampaignsSortDir = () => {
    setCompaniesSortDir(undefined);
    setCouriersSortDir(undefined);
    setCampaignsSortDir(!campaignsSortDir);
  };
  const changeCouriersSortDir = () => {
    setCompaniesSortDir(undefined);
    setCampaignsSortDir(undefined);
    setCouriersSortDir(!couriersSortDir);
  };

  return (
    <StyledContainer>
      <Menu />
      <StyledContentContainer vertical gap={50} menu>
        <Container vertical gap={5}>
          <Title>
            <FormattedMessage id="users.title" />
          </Title>
          <Count>
            <FormattedMessage
              id="valuations.count"
              values={{
                count: <ValuationsCount>{allTowns.length}</ValuationsCount>,
              }}
            />
          </Count>
        </Container>
        <Container vertical gap={30}>
          <SearchContainer>
            <SearchInput
              placeholder={intl.formatMessage({
                id: "towns.filters.text",
              })}
              leftIcon={<SearchIcon />}
              value={searchText}
              onChange={setSearchText}
            />
          </SearchContainer>
          {!currentTowns.length && (
            <EmptyText>
              <FormattedMessage id="towns.empty" />
            </EmptyText>
          )}
          <Container vertical gap={5}>
            <CurrentCount>
              <FormattedMessage
                id="towns.current.count"
                values={{
                  count: (
                    <ValuationsCount>{currentTowns.length}</ValuationsCount>
                  ),
                }}
              />
            </CurrentCount>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <FormattedMessage id="towns.fields.name" />
                  </TableCell>
                  <TableCell onClick={changeCompaniesSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="towns.fields.companies" />
                      {companiesSortDir !== undefined && (
                        <ArrowIcon desc={companiesSortDir} />
                      )}
                    </Container>
                  </TableCell>
                  <TableCell onClick={changeCouriersSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="towns.fields.couriers" />
                      {couriersSortDir !== undefined && (
                        <ArrowIcon desc={couriersSortDir} />
                      )}
                    </Container>
                  </TableCell>
                  <TableCell onClick={changeCampaignsSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="towns.fields.campaigns" />
                      {campaignsSortDir !== undefined && (
                        <ArrowIcon desc={campaignsSortDir} />
                      )}
                    </Container>
                  </TableCell>
                </TableRow>
              </TableHead>
              {currentTowns.map((t, index) => (
                <TableRow key={index}>
                  <TableCell>{t.town}</TableCell>
                  <TableCell>{t.companies.length || <Blank />}</TableCell>
                  <TableCell>{t.couriers.length || <Blank />}</TableCell>
                  <TableCell>{t.campaigns.length || <Blank />}</TableCell>
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
  min-width: 300px;
`;

const SearchIcon = styled(SearchSvg)`
  height: 24px;
  width: 24px;
  margin-left: 5px;
`;

const SearchContainer = styled(Container)`
  min-width: 300px;
`;

export { TownsPage };
