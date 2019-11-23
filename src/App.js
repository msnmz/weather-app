import React from "react";
import "./App.css";
import Header from "./components/Header";
import CityList from "./components/CityList";
const cities = require("./city-weather.json");

function App() {
  return (
    <div className="App">
      <Header title="Weather" />
      <CityList cities={cities} />
    </div>
  );
}

export default App;
