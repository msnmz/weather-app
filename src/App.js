import React from "react";
import Header from "./components/Header";
import CityWeather from "./components/CityWeather/CityWeather";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/:cityId'>
          <Forecast />
        </Route>
        <Route path='/'>
          <Container>
            <Header title='Weather' />
            <CityWeather />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
