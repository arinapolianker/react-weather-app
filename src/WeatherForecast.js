import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ForecastDay from "./ForecastDay";

export default function WeatherForecast(props) {
  const [load, setLoad] = useState(false);
  const [forecast, setForecast] = useState();

  useEffect(() => {
    setLoad(false);
  }, [props]);

  function showForeCast(response) {
    setForecast(response.data.daily);
    console.log(response.data);
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
          {forecast.map((day, index) => {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={day} />
                </div>
              );
            } else {
              return load;
            }
          })}
        </div>
      </div>
    );
  } else {
    search();
    return "loading...";
  }
}
