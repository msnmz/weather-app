import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

function SearchInput(props) {
  return (
    <Grid container spacing={1} alignItems="flex-end">
      <Grid item>
        <SearchIcon />
      </Grid>
      <Grid item>
        <TextField
          label="Search City"
          variant="outlined"
          value={props.searchInput}
          onChange={props.setSearchInput}
        />
      </Grid>
    </Grid>
  );
}

export default SearchInput;
