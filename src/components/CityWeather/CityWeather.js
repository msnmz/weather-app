import React, { useState } from "react";
import City from "../City/City";
import SearchBar from "../SearchBar/SearchBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

function CityWeather(props) {
  const [searchInput, setSearchInput] = useState("");
  const [city, setCity] = useState({});
  const [apiResult, setApiResult] = useState({ succeed: false, error: null });
  function onSearchInputChange(event) {
    setSearchInput(event.target.value);
  }
  function onSearchButtonClicked() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    )
      .then(resp => {
        if (resp.ok) return { success: true, data: resp.json() };
        else return { success: false, data: resp.json() };
      })
      .then(async ({ success, data }) => {
        const result = await data;
        if (success) {
          setCity(result);
          setApiResult({ succeed: true, error: null });
        } else {
          setApiResult({
            succeed: false,
            error: new Error(
              `Could not get the weather data, sorry! Because: ${result.message}`
            )
          });
          setCity({});
        }
      })
      .catch(err => {
        setApiResult({
          succeed: false,
          error: new Error(
            `Could not get the weather data, sorry! Because: ${err.message}`
          )
        });
        setCity({});
      });
  }
  return (
    <Container>
      <SearchBar
        searchInput={searchInput}
        searchInputListener={onSearchInputChange}
        onSearch={onSearchButtonClicked}
      />
      {apiResult.succeed && (
        <City
          city={{ name: city.name, country: city.sys.country }}
          weather={city.weather[0]}
          details={[
            { name: "min temp", value: city.main.temp_min },
            { name: "max temp", value: city.main.temp_max },
            { name: "location", value: `${city.coord.lon}, ${city.coord.lat}` }
          ]}
        />
      )}
      {!apiResult.succeed && apiResult.error && (
        <Typography variant="body1" component="h2" align="center" color="error">
          {apiResult.error.message}
        </Typography>
      )}
    </Container>
  );
}

export default CityWeather;
