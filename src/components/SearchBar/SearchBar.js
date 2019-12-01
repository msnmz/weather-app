import React from "react";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

function SearchBar(props) {
  return (
    <div>
      <SearchInput
        searchInput={props.searchInput}
        setSearchInput={props.searchInputListener}
      />
      <SearchButton onClick={props.onSearch} />
    </div>
  );
}

export default SearchBar;
