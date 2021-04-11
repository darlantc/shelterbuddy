import React from "react";

import { makeStyles } from "@material-ui/styles";
import { OutlinedInput, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { middleGrayColor } from "../../assets/styles/styles";

// Style
const useStyles = makeStyles({
  root: {
    borderRadius: 12,
    backgroundColor: "#F4F4F7",
    border: 0,
  },
  input: {
    fontSize: 14,
    padding: "12px 0",
    color: middleGrayColor,
  },
  notchedOutline: {
    border: 0,
  },
});

interface SearchBarProps {
  label: string;
  value: string;
  autoFocus?: boolean;
  onChange: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  label,
  value,
  autoFocus = true,
  onChange,
}) => {
  const classes = useStyles();
  return (
    <OutlinedInput
      classes={classes}
      id="search-bar"
      name="search-bar"
      placeholder={label}
      autoFocus={autoFocus}
      fullWidth
      value={value}
      onChange={(event) => onChange(event.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon style={{ color: middleGrayColor, fontSize: 16 }} />
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
