import React, {
  FC,
  MouseEventHandler,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled, { css } from "styled-components";
import { useTableContext } from "./TableContext";
import { TableRowContext, TableRowContextType } from "./TableRowContext";
import { TABLE_CELL_CLASSNAME } from "./TableCell";
import { TableProps } from "./types";
import { CommonProps } from "../CommonProps";

interface Props
  extends CommonProps,
    Pick<TableProps, "multiline" | "align" | "verticalAlign"> {
  onClick?: MouseEventHandler;
}

const TableRow: FC<Props> = (props) => {
  const tableCtx = useTableContext();

  const { columnCount, setColumnCount } = tableCtx;
  const [tableRowNode, setTableRowNode] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!columnCount) {
      setColumnCount(
        tableRowNode?.querySelectorAll(TABLE_CELL_CLASSNAME).length || 0
      );
    }
  }, [columnCount, setColumnCount, tableRowNode]);

  const contextValue = useMemo(
    (): TableRowContextType => ({
      multiline: props.multiline,
      align: props.align,
      verticalAlign: props.verticalAlign,
    }),
    [props]
  );

  return (
    <TableRowContext.Provider value={contextValue}>
      <StyledTableRow
        className={props.className}
        style={props.style}
        ref={setTableRowNode}
        onClick={props.onClick}
      >
        {props.children}
      </StyledTableRow>
    </TableRowContext.Provider>
  );
};

const StyledTableRow = styled.div<Pick<Props, "onClick">>`
  display: contents;

  color: #3c5557;
  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
`;

export { TableRow, StyledTableRow };
export type { Props };
