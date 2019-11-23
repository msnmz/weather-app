import React from "react";
import "../styles/City.css";
import CityHeader from "./CityHeader";
import CityWeather from "./CityWeather";
import CityDetailList from "./CityDetailList";

function City(props) {
  return (
    <div className="city">
      <CityHeader name={props.city.name} country={props.city.country} />
      <CityWeather
        main={props.weather.main}
        description={props.weather.description}
      />
      <CityDetailList details={props.details} />
    </div>
  );
}

export default City;
