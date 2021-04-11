import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ReactElement } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
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
    <TableContainer component={Paper}>
      <MaterialTable className={classes.table} aria-label="table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {columns.map((column) => (
                <TableCell
                  key={`${row.id}_${column.id}`}
                  align={column.align || "left"}
                >
                  {/* @ts-ignore */}
                  {row.data[column.id] || "-"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
};

export default Table;
