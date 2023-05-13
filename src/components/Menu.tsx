import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Container } from "./ui/Container";
import { ReactComponent as UserSvg } from "../assets/icons/menu/light/user-icon.svg";
import { ReactComponent as EarthSvg } from "../assets/icons/menu/light/earth-icon.svg";
import { ReactComponent as CouriersSvg } from "../assets/icons/menu/light/campaigns.svg";
import { ReactComponent as MarkSvg } from "../assets/icons/menu/light/mark-icon.svg";
import { Button } from "./ui/Button";
import { routs } from "../routs";

const items: {
  name: string;
  icon: JSX.Element;
  route: string;
}[] = [
  {
    name: "users",
    icon: <UserSvg />,
    route: routs.USERS,
  },
  {
    name: "valuations",
    icon: <MarkSvg />,
    route: routs.VALUATION,
  },
  {
    name: "campaigns",
    icon: <CouriersSvg />,
    route: routs.CAMPAIGNS,
  },
  {
    name: "zones",
    icon: <EarthSvg />,
    route: routs.TOWNS,
  },
];

const Menu = () => {
  const navigate = useNavigate();
  return (
    <MenuContainer gap={50}>
      <ContentContainer vertical>
        <Container vertical gap={70}>
          <Container vertical gap={20}>
            <MenuHeader>
              <FormattedMessage id="menu.header" />
            </MenuHeader>
            {items.map(({ icon, name, route }, index) => (
              <Container gap={10} key={index}>
                <MenuIconContainer>{icon}</MenuIconContainer>
                <MenuItem onClick={() => navigate(route)}>
                  <FormattedMessage id="menu.items" values={{ name }} />
                </MenuItem>
              </Container>
            ))}
          </Container>
        </Container>
        <LogoutButton
          styletype="primary"
          fit
          onClick={() => navigate(routs.LOGIN)}
        >
          <FormattedMessage id="menu.logout" />
        </LogoutButton>
      </ContentContainer>
      <Divider />
    </MenuContainer>
  );
};

const MenuContainer = styled(Container)`
  height: calc(100vh - 210px);
  margin-top: 20px;
  @media (max-width: 700px) {
    display: none;
  }
`;

const MenuHeader = styled.div`
  color: white;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const MenuItem = styled.div`
  color: white;
  font-weight: bold;
  cursor: pointer;
  align-self: center;
`;

const ContentContainer = styled(Container)`
  min-width: 200px;
  max-width: 500px;
  padding-left: 50px;
`;

const Divider = styled.div`
  height: 375px;
  width: 2px;
  background-color: rgba(255, 255, 255, 0.43);
  border-radius: 11;
  height: 100%;
`;

const MenuIconContainer = styled.div`
  cursor: pointer;
  align-self: center;
  height: 24px;
  width: 24px;
`;

const LogoutButton = styled(Button)`
  margin-bottom: 20px;
`;

export { Menu };
