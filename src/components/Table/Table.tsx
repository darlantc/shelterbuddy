import { ReactElement } from "react";

import { makeStyles } from "@material-ui/core/styles";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

import Paginate from "../Paginate/Paginate";

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
  id: string;
  label?: string | ReactElement;
  align?: "left" | "center" | "right";
  isSortable?: boolean;
};

export type TableRowOption<T> = {
  id: string;
  data: T;
};

export type TableProps<T> = {
  columns: TableColumn[];
  rows: TableRowOption<T>[];
  orderBy?: string;
  order?: "asc" | "desc";
  onRequestSort?: (event: React.MouseEvent<unknown>, property: string) => void;
};

const Table = <T,>({
  columns,
  rows,
  orderBy,
  order,
  onRequestSort,
}: TableProps<T>) => {
  const classes = useStyles();

  const renderSortLabel = (column: TableColumn) => {
    if (!onRequestSort) {
      return column.label;
    }

    const isActive = orderBy === column.id;
    const createSortHandler = (property: string) => (
      event: React.MouseEvent<unknown>
    ) => onRequestSort(event, property);

    return (
      <TableSortLabel
        active={isActive}
        direction={isActive ? order : "asc"}
        onClick={createSortHandler(column.id)}
      >
        {column.label}
      </TableSortLabel>
    );
  };

  return (
    <Paginate<string> itemsList={rows.map(({ id }) => id)} itemsPerPage={10}>
      {({ slicedList }) => (
        <MaterialTable className={classes.table} aria-label="table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  classes={{ root: classes.headerCell }}
                >
                  {column.isSortable ? renderSortLabel(column) : column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedList.map((rowId) => {
              const row = rows.find(({ id }) => rowId === id);
              if (!row) {
                return null;
              }
              return (
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
              );
            })}
          </TableBody>
        </MaterialTable>
      )}
    </Paginate>
  );
};

export default Table;
