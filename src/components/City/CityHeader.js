import React from "react";
import Typography from "@material-ui/core/Typography";

function CityHeader(props) {
  return (
    <Typography variant="h1" component="h2">
      {props.name}, {props.country}
    </Typography>
  );
}

export default CityHeader;
