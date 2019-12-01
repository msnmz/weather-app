import React from "react";
import Paper from "@material-ui/core/Paper";
import CityHeader from "./CityHeader";
import CityWeather from "./CityWeather";
import CityDetailList from "./CityDetailList";

function City(props) {
  return (
    <Paper>
      <CityHeader name={props.city.name} country={props.city.country} />
      <CityWeather
        main={props.weather.main}
        description={props.weather.description}
      />
      <CityDetailList details={props.details} />
    </Paper>
  );
}

export default City;
