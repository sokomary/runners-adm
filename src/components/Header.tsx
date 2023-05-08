import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../assets/logo.svg";
import { routs } from "../routs";
import { Container } from "./ui/Container";

const Header = () => (
  <HeaderContainer>
    <NavLink to={routs.START}>
      <Logo />
    </NavLink>
  </HeaderContainer>
);

const HeaderContainer = styled(Container)`
  width: 300px;
  align-items: center;
  padding: 50px 50px 0 50px;
  @media (max-width: 700px) {
    padding: 10px 25px;
    height: 80px;
  }
`;

const Logo = styled(LogoSvg)`
  cursor: pointer;
  @media (max-width: 700px) {
    width: 80px;
  }
`;

export { Header };
