import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CityList from "../CityList/CityList";

function CityWeather(props) {
  const [searchInput, setSearchInput] = useState("");
  const [cities, setCities] = useState([]);
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
          // Filter out the city from what we had before, and take it to top
          const otherCities = cities.filter(city => city.id !== result.id);
          setCities([result, ...otherCities]);
          setApiResult({ succeed: true, error: null });
        } else {
          setApiResult({
            succeed: false,
            error: new Error(
              `Could not get the weather data, sorry! Because: ${result.message}`
            )
          });
        }
      })
      .catch(err => {
        setApiResult({
          succeed: false,
          error: new Error(
            `Could not get the weather data, sorry! Because: ${err.message}`
          )
        });
      });
  }
  return (
    <Container>
      <SearchBar
        searchInput={searchInput}
        searchInputListener={onSearchInputChange}
        onSearch={onSearchButtonClicked}
      />
      {apiResult.succeed && <CityList cities={cities} />}
      {!apiResult.succeed && apiResult.error && (
        <Typography variant='body1' component='h2' align='center' color='error'>
          {apiResult.error.message}
        </Typography>
      )}
    </Container>
  );
}

export default CityWeather;
