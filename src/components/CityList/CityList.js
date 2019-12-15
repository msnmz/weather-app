import React from "react";
import City from "../City/City";
import { Link } from "react-router-dom";

export default function CityList(props) {
  return (
    <ul>
      {props.cities.map(city => (
        <li key={"city_" + city.id}>
          <Link to={"/" + city.id}>
            <City
              onRemoveListener={props.onRemove}
              id={city.id}
              city={{ name: city.name, country: city.sys.country }}
              weather={city.weather[0]}
              details={[
                { name: "min temp", value: city.main.temp_min },
                { name: "max temp", value: city.main.temp_max },
                {
                  name: "location",
                  value: `${city.coord.lon}, ${city.coord.lat}`
                }
              ]}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
