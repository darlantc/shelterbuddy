import { ReactElement } from "react";

import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  darkGrayColor,
  lightGrayColor,
  blackColor,
} from "../../assets/styles/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderCollapse: "separate",
    borderSpacing: "0px 12px",
  },
  headerCell: {
    fontWeight: 500,
    color: darkGrayColor,
    fontSize: 16,
    border: "none",
  },
  tableRow: {
    backgroundColor: lightGrayColor,
  },
  rowCell: {
    fontWeight: 500,
    color: blackColor,
    fontSize: 16,
    border: "none",
    padding: 12,
    "&:first-child": {
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
    },
    "&:last-child": {
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
    },
  },
});

type TableColumn = {
  id: string | number;
  label?: string | ReactElement;
  align?: "left" | "center" | "right";
};

export type TableRowOption<T> = {
  id: string | number;
  data: T;
};

export type TableProps<T> = {
  columns: TableColumn[];
  rows: TableRowOption<T>[];
};

const Table = <T,>({ columns, rows }: TableProps<T>) => {
  const classes = useStyles();

  return (
    <MaterialTable className={classes.table} aria-label="table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.id} classes={{ root: classes.headerCell }}>
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id} classes={{ root: classes.tableRow }}>
            {columns.map((column) => (
              <TableCell
                key={`${row.id}_${column.id}`}
                align={column.align || "left"}
                classes={{ root: classes.rowCell }}
              >
                {/* @ts-ignore */}
                {row.data[column.id] || "-"}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </MaterialTable>
  );
};

export default Table;
