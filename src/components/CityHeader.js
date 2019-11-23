import React from "react";
import "../styles/CityHeader.css";

function CityHeader(props) {
  return (
    <h1 className="city-header">
      {props.name}, {props.country}
    </h1>
  );
}

export default CityHeader;
