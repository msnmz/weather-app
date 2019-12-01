import React from "react";
import Typography from "@material-ui/core/Typography";

function CityHeader(props) {
  return (
    <Typography variant="h2" component="h2" paragraph>
      {props.name}, {props.country}
    </Typography>
  );
}

export default CityHeader;
