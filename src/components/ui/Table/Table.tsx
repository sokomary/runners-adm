import React, { FC, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import { TableContext, TableContextType } from "./TableContext";
import { TableProps } from "./types";

const Table: FC<TableProps> = (props) => {
  const [columnCount, setColumnCount] = useState<number>(0);

  const contextValue = useMemo(
    (): TableContextType => ({
      columnCount,
      setColumnCount,
      multiline: props.multiline,
      align: props.align,
      verticalAlign: props.verticalAlign,
    }),
    [columnCount, props]
  );

  return (
    <TableContext.Provider value={contextValue}>
      <StyledTable
        className={props.className}
        style={props.style}
        columnCount={columnCount}
      >
        {props.children}
      </StyledTable>
    </TableContext.Provider>
  );
};

const StyledTable = styled.div<{ columnCount: number }>`
  position: relative;
  display: grid;
  grid-template-columns: ${(props) => css`repeat(${props.columnCount}, auto)`};
  overflow: hidden;
  font-size: 17px;
  line-height: 17px;
  font-weight: 400;
  background-color: rgba(255, 250, 250, 0.5);
  border-radius: 15px;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  padding: 10px 20px;
`;

export { Table };
