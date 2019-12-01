import React from "react";
import Paper from "@material-ui/core/Paper";
import CityHeader from "./CityHeader";
import CityWeather from "./CityWeather";
import CityDetailList from "./CityDetailList";
import { makeStyles } from "@material-ui/core/styles";

function City(props) {
  const styles = makeStyles({
    root: {
      padding: "30px 20px",
      margin: "20px auto"
    }
  });
  return (
    <Paper className={styles().root}>
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
