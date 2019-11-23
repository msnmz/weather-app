import React from "react";
import "../styles/CityList.css";
import City from "./City";

function CityList(props) {
  return (
    <ul className="city-list">
      {props.cities.map((city, idx) => (
        <City
          key={"city_" + idx}
          city={{ name: city.name, country: city.sys.country }}
          weather={city.weather[0]}
          details={[
            { name: "min temp", value: city.main.temp_min },
            { name: "max temp", value: city.main.temp_max },
            { name: "location", value: `${city.coord.lon}, ${city.coord.lat}` }
          ]}
        />
      ))}
    </ul>
  );
}

export default CityList;
