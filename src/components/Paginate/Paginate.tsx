import { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/styles";

import IconButton from "../Button/IconButton";

// Style
const useStyles = makeStyles({
  container: {
    marginTop: 16,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

interface PaginateProps<T> {
  itemsList: T[];
  itemsPerPage?: number;
  children: (params: { slicedList: T[] }) => void;
}
const Paginate = <T,>({
  itemsList,
  itemsPerPage = 10,
  children,
}: PaginateProps<T>) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsCount = itemsList.length;
  const totalPages = Math.ceil(itemsCount / itemsPerPage);

  let startIndex = 0;
  if (currentPage === 2) {
    startIndex = itemsPerPage;
  } else if (currentPage > 2) {
    const indexToMultiply = currentPage - 1;
    startIndex = indexToMultiply * itemsPerPage;
  }

  const endIndex = startIndex + itemsPerPage;

  const renderNavigateButtons = () => {
    let children = [];
    for (let index = 0; index < totalPages; index++) {
      children.push(
        <IconButton
          key={index}
          secondaryColor={index !== currentPage}
          onClick={() => setCurrentPage(index)}
        >
          {index + 1}
        </IconButton>
      );
    }

    return children;
  };

  return (
    <Fragment>
      {children({
        slicedList: itemsList.slice(startIndex, endIndex),
      })}
      {totalPages > 1 && (
        <div className={classes.container}>{renderNavigateButtons()}</div>
      )}
    </Fragment>
  );
};

export default Paginate;
