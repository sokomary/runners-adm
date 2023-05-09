import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Container } from "./ui/Container";
import { ReactComponent as UserSvg } from "../assets/icons/menu/dark/user-icon.svg";
import { ReactComponent as EarthSvg } from "../assets/icons/menu/dark/earth-icon.svg";
import { ReactComponent as CampaignsSvg } from "../assets/icons/menu/dark/campaigns.svg";
import { routs } from "../routs";
import { ReactComponent as MarkSvg } from "../assets/icons/menu/light/mark-icon.svg";

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
    icon: <CampaignsSvg />,
    route: routs.CAMPAIGNS,
  },
  {
    name: "zones",
    icon: <EarthSvg />,
    route: routs.ZONES,
  },
];

const MobileMenu = () => {
  const navigate = useNavigate();
  return (
    <MenuContainer>
      {items.map(({ icon, route }, index) => (
        <Container key={index} onClick={() => navigate(route)}>
          <MenuIconContainer>{icon}</MenuIconContainer>
        </Container>
      ))}
    </MenuContainer>
  );
};

const MenuContainer = styled(Container)`
  width: 100%;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 20px 20px 0px 0px;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;

  @media (min-width: 700px) {
    display: none;
  }
`;

const MenuIconContainer = styled.div`
  cursor: pointer;
  align-self: center;
  height: 24px;
  width: 24px;
`;

export { MobileMenu };
