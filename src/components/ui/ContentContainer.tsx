import React, { FC } from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { CommonProps } from "./CommonProps";

interface Props extends CommonProps {
  vertical?: boolean;
  gap?: number;
  menu?: boolean;
}

const ContentContainer: FC<Props> = (props) => (
  <StyledContainer
    menu={props.menu}
    className={props.className}
    style={props.style}
    vertical={props.vertical}
    gap={props.gap}
  >
    {props.children}
  </StyledContainer>
);

const StyledContainer = styled(Container)<{ menu?: boolean }>`
  width: 100%;
  padding: 160px 70px 60px 70px;
  max-height: calc(100vh - 220px);
  margin-top: -160px;
  overflow-y: auto;

  @media (max-width: 700px) {
    padding-left: 10%;
    padding-right: 10%;
    max-height: ${(props) =>
      props.menu ? "calc(100vh - 140px);" : "calc(100vh - 80px)"};
    margin-top: 0px;
    padding-top: 0px;
  }
`;

export { ContentContainer };
