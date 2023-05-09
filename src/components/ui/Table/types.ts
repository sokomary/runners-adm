import { CommonProps } from "../CommonProps";

interface TableProps extends CommonProps {
  multiline?: boolean;
  align?: "left" | "center" | "right";
  verticalAlign?: "top" | "center" | "bottom";
}

type ShareTableRowProps = Omit<TableProps, "border">;

const getJustify = (align: TableProps["align"] = "left") =>
  ({
    left: "start",
    center: "center",
    right: "end",
  }[align]);

const getAlign = (verticalAlign: TableProps["verticalAlign"] = "center") =>
  ({
    top: "start",
    center: "center",
    bottom: "end",
  }[verticalAlign]);

enum SortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

type SortParams<T> = [keyof T | undefined, SortDirection | undefined];

export { getJustify, getAlign, SortDirection };

export type { TableProps, ShareTableRowProps, SortParams };
