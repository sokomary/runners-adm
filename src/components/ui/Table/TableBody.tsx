import React, { FC } from "react";
import styled from "styled-components";
import { StyledTableRow } from "./TableRow";
import { CommonProps } from "../CommonProps";

const TableBody: FC<CommonProps> = (props) => (
  <StyledTableBody className={props.className} style={props.style}>
    {props.children}
  </StyledTableBody>
);

const StyledTableBody = styled.div`
  display: contents;

  ${StyledTableRow} {
    &:last-child::after {
      border-bottom-color: transparent;
    }
  }
`;

export { TableBody };
