import React, { useState, useEffect } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip
} from "recharts";
import { useParams, Link } from "react-router-dom";
import { Button, Typography, Container, Grid } from "@material-ui/core";

function Forecast() {
  const { cityId } = useParams();

  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [city, setCity] = useState({});
  const [forecastState, setForecastState] = useState("hourly"); // hourly | daily
  const [apiResult, setApiResult] = useState({ succeed: false, error: null });

  useEffect(() => {
    if (hourlyForecast.length === 0) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
      )
        .then(resp => {
          if (resp.ok) return { success: true, data: resp.json() };
          else return { success: false, data: resp.json() };
        })
        .then(async ({ success, data }) => {
          const result = await data;
          if (success) {
            console.log(result);
            setCity(result.city);
            const hourlyForecastData = result.list[0];
            setHourlyForecast([
              {
                name: hourlyForecastData.dt_txt + " temp",
                degree: hourlyForecastData.main.temp
              },
              {
                name: "Min Temp",
                degree: hourlyForecastData.main.temp_min
              },
              {
                name: "Max Temp",
                degree: hourlyForecastData.main.temp_max
              },
              {
                name: "Humidity",
                degree: hourlyForecastData.main.humidity
              }
            ]);
            setDailyForecast(
              result.list.map(fcast => {
                return {
                  name: fcast.dt_txt,
                  temperature: fcast.main.temp
                };
              })
            );
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
  }, [forecastState]);

  function getRates(forecast) {
    setForecastState(forecast);
  }

  return (
    <Container>
      <Grid container direction='row' justify='center'>
        <Grid item>
          <Link to='/'>
            <Button variant='outlined'>Back</Button>
          </Link>
        </Grid>
        <Grid item>
          <Button variant='outlined' onClick={getRates.bind(null, "hourly")}>
            Hourly Forecast
          </Button>
        </Grid>
        <Grid item>
          <Button variant='outlined' onClick={getRates.bind(null, "daily")}>
            5-day Forecast
          </Button>
        </Grid>
      </Grid>
      {apiResult.succeed && (
        <Grid container direction='column' justify='center'>
          <Grid item>
            <Typography variant='h2' component='h2' paragraph>
              {city.name}, {city.country}
            </Typography>
          </Grid>
          <Grid item>
            <AreaChart
              width={(window.innerWidth * 2) / 3}
              height={500}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}
              data={forecastState === "hourly" ? hourlyForecast : dailyForecast}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Area
                type='monotone'
                dataKey={forecastState === "hourly" ? "degree" : "temperature"}
                stroke='#8884d8'
                fill='#8884d8'
              />
            </AreaChart>
          </Grid>
        </Grid>
      )}
      {!apiResult.succeed && apiResult.error && (
        <Typography variant='body1' component='h2' align='center' color='error'>
          {apiResult.error.message}
        </Typography>
      )}
      {!apiResult.succeed && !apiResult.error && (
        <Typography variant='body1' component='h2' align='center'>
          Loading...
        </Typography>
      )}
    </Container>
  );
}

export default Forecast;
