import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  const [load, setLoad] = useState(false);
  const [forecast, setForecast] = useState();

  function showForeCast(response) {
    setForecast(response.data.daily);
    console.log(response.data.daily);
    setLoad(true);
  }
  function search() {
    const apiKey = "089de42863cffcedc265abdd75619b42";
    let lat = props.coords.lat;
    let lon = props.coords.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&exclude=hourly,minutely`;
    axios.get(url).then(showForeCast);
  }

  if (load) {
    return (
      <div className="forecast">
        <div className="row">
          <div className="col-2">
            <ForecastDay day={forecast[0]} />
          </div>
          <div className="col-2">
            <ForecastDay day={forecast[1]} />
          </div>
          <div className="col-2">
            <ForecastDay day={forecast[2]} />
          </div>
          <div className="col-2">
            <ForecastDay day={forecast[3]} />
          </div>
          <div className="col-2">
            <ForecastDay day={forecast[4]} />
          </div>
          <div className="col-2">
            <ForecastDay day={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
