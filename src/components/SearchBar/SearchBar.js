import React from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import Grid from "@material-ui/core/Grid";

function SearchBar(props) {
  return (
    <Grid
      container
      spacing={1}
      alignItems="center"
      direction="row"
      justify="center"
    >
      <SearchInput
        searchInput={props.searchInput}
        setSearchInput={props.searchInputListener}
      />
      <SearchButton onClick={props.onSearch} />
    </Grid>
  );
}

export default SearchBar;
