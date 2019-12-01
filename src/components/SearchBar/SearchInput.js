import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";

function SearchInput(props) {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default SearchInput;
