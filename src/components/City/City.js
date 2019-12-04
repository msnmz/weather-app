import React from "react";
import Paper from "@material-ui/core/Paper";
import CityHeader from "./CityHeader";
import CityWeather from "./CityWeather";
import CityDetailList from "./CityDetailList";
import { Fab } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

function City(props) {
  const styles = makeStyles({
    root: {
      position: "relative",
      padding: "30px 20px",
      margin: "20px auto"
    },
    closeButton: {
      position: "absolute",
      top: "20px",
      right: "25px"
    }
  });
  return (
    <Paper className={styles().root}>
      <Fab
        className={styles().closeButton}
        onClick={() => props.onRemoveListener(props.id)}
      >
        <Close />
      </Fab>
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
