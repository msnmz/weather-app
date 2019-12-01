import React from "react";
import Button from "@material-ui/core/Button";
import FindReplaceIcon from "@material-ui/icons/FindReplace";

function SearchButton(props) {
  return (
    <Button
      onClick={props.onClick}
      variant="contained"
      color="default"
      startIcon={<FindReplaceIcon />}
    >
      Search
    </Button>
  );
}

export default SearchButton;
