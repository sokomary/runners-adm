import React, { FC } from "react";
import styled from "styled-components";
import { CommonProps } from "./CommonProps";

const ToastContent: FC<CommonProps> = (props) => (
  <StyledDiv>{props.children}</StyledDiv>
);

const StyledDiv = styled.div`
  color: 435B5C;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
`;

export { ToastContent };
