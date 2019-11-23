import React from "react";
import "../styles/CityDetail.css";

function CityDetail(props) {
  return (
    <li className="city-detail-item">
      {props.name}: {props.value}
    </li>
  );
}

export default CityDetail;
