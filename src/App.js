import React from "react";
import Header from "./components/Header";
import CityWeather from "./components/CityWeather/CityWeather";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Container>
      <Header title="Weather" />
      <CityWeather />
    </Container>
  );
}

export default App;
