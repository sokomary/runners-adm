import React, { FC } from "react";
import styled from "styled-components";
import { StyledTableRow } from "./TableRow";
import { CommonProps } from "../CommonProps";

const TableHead: FC<CommonProps> = (props) => (
  <StyledTableHead className={props.className} style={props.style}>
    {props.children}
  </StyledTableHead>
);

const StyledTableHead = styled.div`
  display: contents;

  ${StyledTableRow} {
    color: #3c5557;
    font-weight: bold;
    font-size: 17px;

    &::after {
      opacity: 1;
    }
  }
`;

export { TableHead };
