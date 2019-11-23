import React from "react";
import "../styles/CityWeather.css";

function CityWeather(props) {
  return (
    <div className="city-weather">
      <h2 className="city-weather-title">{props.main}</h2>
      <h6 className="city-weather-subtitle">{props.description}</h6>
    </div>
  );
}

export default CityWeather;
