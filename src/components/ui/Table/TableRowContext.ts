import React, { useContext } from "react";
import { ShareTableRowProps } from "./types";

interface TableRowContextType extends ShareTableRowProps {}

const TableRowContext = React.createContext<TableRowContextType | undefined>(
  undefined
);

const useTableRowContext = (): TableRowContextType => {
  const ctx = useContext(TableRowContext);

  if (!ctx) {
    throw new Error("Use <TableCell> only inside <TableRow>.");
  }

  return ctx;
};

export { useTableRowContext, TableRowContext };
export type { TableRowContextType };
