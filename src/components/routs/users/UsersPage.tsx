import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { FormattedMessage, useIntl } from "react-intl";
import moment from "moment";
import { Container } from "../../ui/Container";
import { ContentContainer } from "../../ui/ContentContainer";
import { MobileMenu } from "../../MobileMenu";
import { Menu } from "../../Menu";
import { Title } from "../../ui/Title";
import { allCompanies, allCouriers } from "../../../mocks/mocks";
import { Table } from "../../ui/Table/Table";
import { TableHead } from "../../ui/Table/TableHead";
import { TableRow } from "../../ui/Table/TableRow";
import { TableCell } from "../../ui/Table/TableCell";
import { Input } from "../../ui/Input";
import { ReactComponent as SearchSvg } from "../../../assets/icons/search-icon.svg";
import { Blank } from "../../ui/Table/Blank";
import { ReactComponent as ArrowSvg } from "../../../assets/arrow.svg";

const UsersPage = () => {
  const usersCount = allCompanies.length + allCouriers.length;

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
              id="users.title.count"
              values={{ count: <UsersCount>{usersCount}</UsersCount> }}
            />
          </Count>
        </Container>
        <Companies />
        <Couriers />
      </StyledContentContainer>
      <MobileMenu />
    </StyledContainer>
  );
};

const Companies = () => {
  const intl = useIntl();
  const [dateStart, setDateStart] = useState<string>("");
  const [dateEnd, setDateEnd] = useState<string>("");
  const [text, setText] = useState<string>("");

  const [dateRegSortDir, setDateRegSortDir] = useState<boolean | undefined>(
    undefined
  );
  const [dateCreateSortDir, setDateCreateSortDir] = useState<
    boolean | undefined
  >(undefined);
  const [dateAuthSortDir, setDateAuthSortDir] = useState<boolean | undefined>(
    undefined
  );

  const changeDateRegSortDir = () => {
    setDateCreateSortDir(undefined);
    setDateAuthSortDir(undefined);
    setDateRegSortDir(!dateRegSortDir);
  };
  const changeDateCreateSortDir = () => {
    setDateRegSortDir(undefined);
    setDateAuthSortDir(undefined);
    setDateCreateSortDir(!dateCreateSortDir);
  };
  const changeDateAuthSortDir = () => {
    setDateRegSortDir(undefined);
    setDateCreateSortDir(undefined);
    setDateAuthSortDir(!dateAuthSortDir);
  };

  const currentCompanies = useMemo(() => {
    let companies = allCompanies;
    if (dateStart && dateEnd) {
      companies = companies.filter(
        (c) =>
          c.registrationDate >= moment(dateStart) &&
          c.registrationDate <= moment(dateEnd)
      );
    }
    if (text.length) {
      companies = companies.filter(
        (c) =>
          c.id.toString().includes(text) ||
          c.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
          c.address.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    }
    if (dateRegSortDir !== undefined) {
      companies = companies.sort((a, b) =>
        // eslint-disable-next-line no-nested-ternary
        a.registrationDate < b.registrationDate
          ? dateRegSortDir
            ? 1
            : -1
          : dateRegSortDir
          ? -1
          : 1
      );
    }
    if (dateCreateSortDir !== undefined) {
      companies = companies.sort((a, b) =>
        // eslint-disable-next-line no-nested-ternary
        a.creationDate < b.creationDate
          ? dateCreateSortDir
            ? 1
            : -1
          : dateCreateSortDir
          ? -1
          : 1
      );
    }
    if (dateAuthSortDir !== undefined) {
      companies = companies.sort((a, b) => {
        if (a.lastAuthDate && b.lastAuthDate) {
          // eslint-disable-next-line no-nested-ternary
          return a.lastAuthDate < b.lastAuthDate
            ? dateAuthSortDir
              ? 1
              : -1
            : dateAuthSortDir
            ? -1
            : 1;
        }
        return -1;
      });
    }
    return companies;
  }, [
    dateAuthSortDir,
    dateCreateSortDir,
    dateEnd,
    dateRegSortDir,
    dateStart,
    text,
  ]);

  return (
    <Container vertical gap={30}>
      <CompaniesTitle>
        <FormattedMessage
          id="users.companies.title"
          values={{ count: allCompanies.length }}
        />
      </CompaniesTitle>
      <Container vertical gap={10}>
        <Container gap={10}>
          <Container vertical gap={5}>
            <DateLabel>
              <FormattedMessage id="users.companies.filters.date" />
            </DateLabel>
            <DateInput type="date" value={dateStart} onChange={setDateStart} />
          </Container>
          <DateInput type="date" value={dateEnd} onChange={setDateEnd} />
          <SearchInput
            placeholder={intl.formatMessage({
              id: "users.companies.filters.text",
            })}
            leftIcon={<SearchIcon />}
            value={text}
            onChange={setText}
          />
        </Container>
        {!currentCompanies.length ? (
          <EmptyText>
            <FormattedMessage id="users.companies.empty" />
          </EmptyText>
        ) : (
          <Container vertical gap={5}>
            <CurrentCount>
              <FormattedMessage
                id="users.companies.current.count"
                values={{
                  count: <UsersCount>{currentCompanies.length}</UsersCount>,
                }}
              />
            </CurrentCount>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <FormattedMessage id="users.companies.table.headers.id" />
                  </TableCell>
                  <TableCell>
                    <FormattedMessage id="users.companies.table.headers.name" />
                  </TableCell>
                  <TableCell onClick={changeDateRegSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="users.companies.table.headers.registrationDate" />
                      {dateRegSortDir !== undefined && (
                        <ArrowIcon desc={dateRegSortDir} />
                      )}
                    </Container>
                  </TableCell>
                  <TableCell>
                    <FormattedMessage id="users.companies.table.headers.town" />
                  </TableCell>
                  <TableCell onClick={changeDateCreateSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="users.companies.table.headers.creationDate" />
                      {dateCreateSortDir !== undefined && (
                        <ArrowIcon desc={dateCreateSortDir} />
                      )}
                    </Container>
                  </TableCell>
                  <TableCell onClick={changeDateAuthSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="users.companies.table.headers.lastAuthDate" />
                      {dateAuthSortDir !== undefined && (
                        <ArrowIcon desc={dateAuthSortDir} />
                      )}
                    </Container>
                  </TableCell>
                </TableRow>
              </TableHead>
              {currentCompanies.map((company, index) => (
                <TableRow key={index}>
                  <TableCell>{company.id}</TableCell>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>
                    {company.registrationDate.format("L, LTS")}
                  </TableCell>
                  <TableCell>{company.address}</TableCell>
                  <TableCell>{company.creationDate.format("L, LTS")}</TableCell>
                  <TableCell>{company.lastAuthDate || <Blank />}</TableCell>
                </TableRow>
              ))}
            </Table>
          </Container>
        )}
      </Container>
    </Container>
  );
};

const Couriers = () => {
  const intl = useIntl();
  const [dateStart, setDateStart] = useState<string>("");
  const [dateEnd, setDateEnd] = useState<string>("");
  const [dateBirthStart, setDateBirthStart] = useState<string>("");
  const [dateBirthEnd, setBirthDateEnd] = useState<string>("");
  const [text, setText] = useState<string>("");

  const [dateRegSortDir, setDateRegSortDir] = useState<boolean | undefined>(
    undefined
  );
  const [dateBirthSortDir, setDateBirthSortDir] = useState<boolean | undefined>(
    undefined
  );
  const [dateAuthSortDir, setDateAuthSortDir] = useState<boolean | undefined>(
    undefined
  );

  const changeDateRegSortDir = () => {
    setDateBirthSortDir(undefined);
    setDateAuthSortDir(undefined);
    setDateRegSortDir(!dateRegSortDir);
  };
  const changeDateBirthSortDir = () => {
    setDateRegSortDir(undefined);
    setDateAuthSortDir(undefined);
    setDateBirthSortDir(!dateBirthSortDir);
  };
  const changeDateAuthSortDir = () => {
    setDateRegSortDir(undefined);
    setDateBirthSortDir(undefined);
    setDateAuthSortDir(!dateAuthSortDir);
  };

  const currentCouriers = useMemo(() => {
    let couriers = allCouriers;
    if (dateStart && dateEnd) {
      couriers = couriers.filter(
        (c) =>
          c.registrationDate >= moment(dateStart) &&
          c.registrationDate <= moment(dateEnd)
      );
    }
    if (dateBirthStart && dateBirthEnd) {
      couriers = couriers.filter(
        (c) =>
          c.birthDate >= moment(dateBirthStart) &&
          c.birthDate <= moment(dateBirthEnd)
      );
    }
    if (text.length) {
      couriers = couriers.filter(
        (c) =>
          c.id.toString().includes(text) ||
          c.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
          c.towns.toLocaleLowerCase().includes(text.toLocaleLowerCase()) ||
          c.zones.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      );
    }
    if (dateRegSortDir !== undefined) {
      couriers = couriers.sort((a, b) =>
        // eslint-disable-next-line no-nested-ternary
        a.registrationDate < b.registrationDate
          ? dateRegSortDir
            ? 1
            : -1
          : dateRegSortDir
          ? -1
          : 1
      );
    }
    if (dateBirthSortDir !== undefined) {
      couriers = couriers.sort((a, b) =>
        // eslint-disable-next-line no-nested-ternary
        a.birthDate < b.birthDate
          ? dateBirthSortDir
            ? 1
            : -1
          : dateBirthSortDir
          ? -1
          : 1
      );
    }
    if (dateAuthSortDir !== undefined) {
      couriers = couriers.sort((a, b) => {
        if (a.lastAuthDate && b.lastAuthDate) {
          // eslint-disable-next-line no-nested-ternary
          return a.lastAuthDate < b.lastAuthDate
            ? dateAuthSortDir
              ? 1
              : -1
            : dateAuthSortDir
            ? -1
            : 1;
        }
        return -1;
      });
    }

    return couriers;
  }, [
    dateStart,
    dateEnd,
    dateBirthStart,
    dateBirthEnd,
    text,
    dateRegSortDir,
    dateBirthSortDir,
    dateAuthSortDir,
  ]);

  return (
    <Container vertical gap={30}>
      <CompaniesTitle>
        <FormattedMessage
          id="users.couriers.title"
          values={{ count: allCouriers.length }}
        />
      </CompaniesTitle>
      <Container vertical gap={10}>
        <Container gap={10}>
          <Container vertical gap={5}>
            <DateLabel>
              <FormattedMessage id="users.couriers.filters.date" />
            </DateLabel>
            <DateInput type="date" value={dateStart} onChange={setDateStart} />
          </Container>
          <DateInput type="date" value={dateEnd} onChange={setDateEnd} />
          <SearchInput
            placeholder={intl.formatMessage({
              id: "users.couriers.filters.text",
            })}
            leftIcon={<SearchIcon />}
            value={text}
            onChange={setText}
          />
          <Container vertical gap={5}>
            <DateLabel>
              <FormattedMessage id="users.couriers.filters.birthDate" />
            </DateLabel>
            <DateInput
              type="date"
              value={dateBirthStart}
              onChange={setDateBirthStart}
            />
          </Container>
          <DateInput
            type="date"
            value={dateBirthEnd}
            onChange={setBirthDateEnd}
          />
        </Container>
        {!currentCouriers.length ? (
          <EmptyText>
            <FormattedMessage id="users.couriers.empty" />
          </EmptyText>
        ) : (
          <Container vertical gap={5}>
            <CurrentCount>
              <FormattedMessage
                id="users.couriers.current.count"
                values={{
                  count: <UsersCount>{currentCouriers.length}</UsersCount>,
                }}
              />
            </CurrentCount>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <FormattedMessage id="users.couriers.table.headers.id" />
                  </TableCell>
                  <TableCell>
                    <FormattedMessage id="users.couriers.table.headers.name" />
                  </TableCell>
                  <TableCell onClick={changeDateRegSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="users.couriers.table.headers.registrationDate" />
                      {dateRegSortDir !== undefined && (
                        <ArrowIcon desc={dateRegSortDir} />
                      )}
                    </Container>
                  </TableCell>
                  <TableCell>
                    <FormattedMessage id="users.couriers.table.headers.town" />
                  </TableCell>
                  <TableCell onClick={changeDateBirthSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="users.couriers.table.headers.birthDate" />
                      {dateBirthSortDir !== undefined && (
                        <ArrowIcon desc={dateBirthSortDir} />
                      )}
                    </Container>
                  </TableCell>
                  <TableCell onClick={changeDateAuthSortDir}>
                    <Container gap={5}>
                      <FormattedMessage id="users.couriers.table.headers.lastAuthDate" />
                      {dateAuthSortDir !== undefined && (
                        <ArrowIcon desc={dateAuthSortDir} />
                      )}
                    </Container>
                  </TableCell>
                </TableRow>
              </TableHead>
              {currentCouriers.map((company, index) => (
                <TableRow key={index}>
                  <TableCell>{company.id}</TableCell>
                  <TableCell>{company.name}</TableCell>
                  <TableCell>
                    {company.registrationDate.format("L, LTS")}
                  </TableCell>
                  <TableCell>{company.towns}</TableCell>
                  <TableCell>{company.birthDate.format("L")}</TableCell>
                  <TableCell>{company.lastAuthDate || <Blank />}</TableCell>
                </TableRow>
              ))}
            </Table>
          </Container>
        )}
      </Container>
    </Container>
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

const CompaniesTitle = styled.div`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

const UsersCount = styled.span`
  font-weight: bold;
`;

const CurrentCount = styled.span`
  color: white;
  font-size: 18px;
`;

const DateLabel = styled.div`
  color: white;
  font-size: 14px;
`;

const DateInput = styled(Input)`
  margin-left: -5px;
  align-self: flex-end;
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

const ArrowIcon = styled(ArrowSvg)<{ desc: boolean }>`
  ${(props) => (!props.desc ? "transform: rotate(180deg)" : "")};
  height: 14px;
  width: 14px;
  align-self: center;
`;

export { UsersPage };
