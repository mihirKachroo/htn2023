// src/components/SearchBar.js
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const SearchBar = ({ options }) => {
  const [value, setValue] = useState(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      options={options}
      renderInput={(params) => <TextField {...params} label="Search" />}
    />
  );
};

export default SearchBar;
