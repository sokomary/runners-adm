import React, { useContext } from "react";
import { TableProps } from "./types";

interface TableContextType extends TableProps {
  columnCount: number;
  setColumnCount: React.Dispatch<
    React.SetStateAction<TableContextType["columnCount"]>
  >;
}

const TableContext = React.createContext<TableContextType | undefined>(
  undefined
);

const useTableContext = (): TableContextType => {
  const ctx = useContext(TableContext);

  if (!ctx) {
    throw new Error("Use <TableRow> only inside <Table>.");
  }

  return ctx;
};

export { useTableContext, TableContext };
export type { TableContextType };
