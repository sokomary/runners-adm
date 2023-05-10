import React, { useMemo, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import styled from "styled-components";
import moment from "moment";
import { allFeedbacks } from "../../../mocks/mocks";
import { Menu } from "../../Menu";
import { Container } from "../../ui/Container";
import { Title } from "../../ui/Title";
import { MobileMenu } from "../../MobileMenu";
import { ContentContainer } from "../../ui/ContentContainer";
import { Table } from "../../ui/Table/Table";
import { TableHead } from "../../ui/Table/TableHead";
import { TableCell } from "../../ui/Table/TableCell";
import { TableRow } from "../../ui/Table/TableRow";
import { Source } from "../../../domain/Source";
import { Dropdown, Option } from "../../ui/Dropdown";
import { Input } from "../../ui/Input";
import { ReactComponent as ArrowSvg } from "../../../assets/arrow.svg";

const ValuationsPage = () => {
  const intl = useIntl();
  const count = allFeedbacks.length;

  const [sourceFilter, setSourceFilter] = useState<Option | undefined>(
    undefined
  );
  const [dateStart, setDateStart] = useState<string>("");
  const [dateEnd, setDateEnd] = useState<string>("");

  const [estStart, setEstStart] = useState<string>("1");
  const [estEnd, setEstEnd] = useState<string>("5");

  const [dateSortDir, setDateSortDir] = useState<boolean | undefined>(
    undefined
  );
  const [valueSortDir, setValueSortDir] = useState<boolean | undefined>(
    undefined
  );
  const changeDateSortDir = () => {
    setValueSortDir(undefined);
    setDateSortDir(!dateSortDir);
  };

  const changeValueSortDir = () => {
    setDateSortDir(undefined);
    setValueSortDir(!valueSortDir);
  };

  const currentValuations = useMemo(() => {
    let feedbacks = allFeedbacks;
    if (sourceFilter) {
      feedbacks = feedbacks.filter((f) => f.source === sourceFilter.value);
    }
    if (dateStart && dateEnd) {
      feedbacks = feedbacks.filter(
        (f) => f.date >= moment(dateStart) && f.date <= moment(dateEnd)
      );
    }
    if (estStart) {
      feedbacks = feedbacks.filter(
        (f) => f.estimation >= (estStart as unknown as number)
      );
    }
    if (estEnd) {
      feedbacks = feedbacks.filter(
        (f) => f.estimation <= (estEnd as unknown as number)
      );
    }
    if (dateSortDir !== undefined) {
      feedbacks = feedbacks.sort((a, b) =>
        // eslint-disable-next-line no-nested-ternary
        a.date < b.date ? (dateSortDir ? 1 : -1) : dateSortDir ? -1 : 1
      );
    }
    if (valueSortDir !== undefined) {
      feedbacks = feedbacks.sort((a, b) =>
        // eslint-disable-next-line no-nested-ternary
        a.estimation < b.estimation
          ? valueSortDir
            ? 1
            : -1
          : valueSortDir
          ? -1
          : 1
      );
    }
    return feedbacks;
  }, [
    dateEnd,
    dateSortDir,
    dateStart,
    estEnd,
    estStart,
    sourceFilter,
    valueSortDir,
  ]);

  const options = Object.values(Source).map((v) => ({
    value: v,
    label: intl.formatMessage(
      { id: "valuations.fields.category.value" },
      { category: v }
    ),
  }));

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
                count: <ValuationsCount>{count}</ValuationsCount>,
              }}
            />
          </Count>
        </Container>
        <Container vertical gap={30}>
          <FiltersContainer gap={30}>
            <Dropdown
              placeholder={intl.formatMessage({
                id: "valuations.filters.category",
              })}
              value={sourceFilter}
              options={options}
              onChange={setSourceFilter}
            />
            <DoubleContainer gap={10}>
              <Container vertical gap={5}>
                <Label>
                  <FormattedMessage id="valuations.filters.date" />
                </Label>
                <DateInput
                  type="date"
                  value={dateStart}
                  onChange={setDateStart}
                />
              </Container>
              <DateInput type="date" value={dateEnd} onChange={setDateEnd} />
            </DoubleContainer>
            <DoubleContainer gap={10}>
              <Container vertical gap={5}>
                <Label>
                  <FormattedMessage id="valuations.filters.estimation" />
                </Label>
                <EstInput value={estStart} onChange={setEstStart} />
              </Container>
              <EstInput value={estEnd} onChange={setEstEnd} />
            </DoubleContainer>
          </FiltersContainer>
          {!count && (
            <EmptyText>
              <FormattedMessage id="valuations.empty" />
            </EmptyText>
          )}
          <Container vertical gap={5}>
            <CurrentCount>
              <FormattedMessage
                id="valuations.current.count"
                values={{
                  count: (
                    <ValuationsCount>
                      {currentValuations.length}
                    </ValuationsCount>
                  ),
                }}
              />
            </CurrentCount>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell onClick={changeValueSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="valuations.fields.value" />
                      {valueSortDir !== undefined && (
                        <ArrowIcon desc={valueSortDir} />
                      )}
                    </Container>
                  </TableCell>
                  <TableCell>
                    <FormattedMessage id="valuations.fields.text" />
                  </TableCell>
                  <TableCell>
                    <FormattedMessage id="valuations.fields.category" />
                  </TableCell>
                  <TableCell onClick={changeDateSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="valuations.fields.date" />
                      {dateSortDir !== undefined && (
                        <ArrowIcon desc={dateSortDir} />
                      )}
                    </Container>
                  </TableCell>
                </TableRow>
              </TableHead>
              {currentValuations.map((v, index) => (
                <TableRow key={index}>
                  <TableCell>{v.estimation}</TableCell>
                  <TableCell>{v.text}</TableCell>
                  <TableCell>
                    <FormattedMessage
                      id="valuations.fields.category.value"
                      values={{ category: v.source }}
                    />
                  </TableCell>
                  <TableCell>{v.date.format("L, LTS")}</TableCell>
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

const Label = styled.div`
  color: white;
  font-size: 14px;
`;

const StyledContentContainer = styled(ContentContainer)`
  @media (max-width: 700px) {
    gap: 20px;
  }
`;

const DateInput = styled(Input)`
  margin-left: -5px;
  align-self: flex-end;
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

const FiltersContainer = styled(Container)`
  align-items: flex-end;
`;

const DoubleContainer = styled(Container)`
  align-items: flex-end;
`;

const EstInput = styled(Input)`
  width: 50px;
  margin-left: -5px;
`;

const ArrowIcon = styled(ArrowSvg)<{ desc: boolean }>`
  ${(props) => (!props.desc ? "transform: rotate(180deg)" : "")};
  height: 14px;
  width: 14px;
  align-self: center;
`;

export { ValuationsPage };
