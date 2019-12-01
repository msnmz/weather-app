import React from "react";
import Typography from "@material-ui/core/Typography";

function CityWeather(props) {
  return (
    <Typography component="div">
      <Typography variant="h3" component="h2">
        {props.main}
      </Typography>
      <Typography variant="subtitle1" component="h2">
        {props.description}
      </Typography>
    </Typography>
  );
}

export default CityWeather;
