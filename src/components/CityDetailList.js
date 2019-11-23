import React from "react";
import CityDetail from "./CityDetail";
import "../styles/CityDetailList.css";

function CityDetailList(props) {
  return (
    <ul className="city-detail-list">
      {props.details.map((detail, idx) => (
        <CityDetail
          name={detail.name}
          value={detail.value}
          key={"city_detail_" + idx}
        />
      ))}
    </ul>
  );
}

export default CityDetailList;
