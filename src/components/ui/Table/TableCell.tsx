import styled, { css } from "styled-components";
import React, {
  FC,
  MouseEventHandler,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useTableContext } from "./TableContext";
import { getAlign, getJustify, TableProps } from "./types";
import { useTableRowContext } from "./TableRowContext";
import { CommonProps } from "../CommonProps";

interface Props
  extends CommonProps,
    Pick<TableProps, "align" | "verticalAlign"> {
  onClick?: MouseEventHandler;
}

const TableCell: FC<Props> = (props) => {
  const tableCtx = useTableContext();
  const tableRowCtx = useTableRowContext();

  const multiline = tableRowCtx.multiline ?? tableCtx.multiline;
  const align = props.align ?? tableRowCtx.align ?? tableCtx.align;
  const verticalAlign =
    props.verticalAlign ?? tableRowCtx.verticalAlign ?? tableCtx.verticalAlign;

  const [cellNode, setCellNode] = useState<HTMLDivElement | null>(null);
  const initialCellWidth = useRef<number>();
  const restrictedCellWidth = useRef<number>();
  const [restrictWidth, setRestrictWidth] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOverflow, setIsOverflow] = useState(false);

  useLayoutEffect(() => {
    if (cellNode && !multiline) {
      if (!initialCellWidth.current) {
        initialCellWidth.current = cellNode.offsetWidth;
        setRestrictWidth(true);
      }

      if (!restrictedCellWidth.current && restrictWidth) {
        restrictedCellWidth.current = cellNode.offsetWidth;
      }

      if (initialCellWidth.current && restrictedCellWidth.current) {
        setIsOverflow(initialCellWidth.current > restrictedCellWidth.current);
      }
    }
  }, [cellNode, multiline, restrictWidth]);

  return (
    <StyledTableCellWrapper restrictWidth={restrictWidth}>
      <StyledTableCell
        className={props.className}
        style={props.style}
        ref={setCellNode}
        align={align}
        verticalAlign={verticalAlign}
        onClick={props.onClick}
      >
        {props.children}
        {/* {cellNode?.innerText && ( */}
        {/*  <Tooltip content={cellNode?.innerText}>{props.children}</Tooltip> */}
        {/* )} */}
      </StyledTableCell>
    </StyledTableCellWrapper>
  );
};

const StyledTableCellWrapper = styled.div<{ restrictWidth: boolean }>`
  box-sizing: border-box;
  overflow: hidden;
  ${(props) =>
    props.restrictWidth &&
    css`
      width: 100%;
    `}
  height: 100%;
  padding: 8px 10px;
`;

const StyledTableCell = styled.div<
  Pick<Props, "align" | "verticalAlign" | "onClick">
>`
  display: inline-flex;
  overflow: hidden;
  max-width: 100%;

  align-items: ${(props) => getAlign(props.verticalAlign)};
  justify-items: ${(props) => getJustify(props.align)};
  align-self: ${(props) => getAlign(props.verticalAlign)};
  justify-self: ${(props) => getJustify(props.align)};
  text-align: ${(props) => props.align};

  ${(props) =>
    props.onClick &&
    css`
      cursor: pointer;
    `}
`;

// const StyledTooltip = styled(Tooltip)<Pick<TableProps, "multiline">>`
//   flex: 1 1 auto;
//   display: inline-block;
//   overflow: hidden;
//   max-width: 100%;
//
//   ${(props) =>
//     props.multiline
//       ? css`
//           white-space: normal;
//           word-break: break-word;
//           hyphens: auto;
//         `
//       : css`
//           white-space: nowrap;
//           text-overflow: ellipsis;
//         `}
// `;

const TABLE_CELL_CLASSNAME = String(StyledTableCell);

export { StyledTableCellWrapper, TableCell, TABLE_CELL_CLASSNAME };
export type { Props };
