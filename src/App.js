import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState({});
  const [load, setLoad] = useState();
  const [color, setColor] = useState();

  function showTemp(response) {
    setWeather({
      name: response.data.name,
      temp: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
      icon: response.data.weather[0].icon,
      coords: response.data.coord,
    });
    setLoad(true);

    let hour = weather.date.getHours();
    if (hour >= 6 && hour < 7) {
      setColor(
        "linear-gradient(179deg, rgba(138, 179, 233, 1) 3.3%, rgba(255, 159, 121, 1) 70%, rgba(252, 220, 132, 1) 100%)"
      );
    }
    if (hour >= 7 && hour < 16) {
      setColor(
        "linear-gradient(46deg, rgba(45, 130, 241, 1) 3.3%, rgba(181, 221, 247, 1) 100%)"
      );
    }
    if (hour >= 16 && hour < 17) {
      setColor(
        "linear-gradient(179deg, rgba(13, 52, 104, 1) 3.3%, rgba(255, 146, 103, 1) 70%, rgba(255, 188, 6, 1) 100%)"
      );
    }
    if (hour >= 17 && hour < 6) {
      setColor(
        "linear-gradient(179deg, rgba(31, 58, 109, 1) 3.3%, rgba(53, 87, 150, 1) 100%)"
      );
    }
  }

  function launchCity(event) {
    event.preventDefault();
    search();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "089de42863cffcedc265abdd75619b42";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
  }

  if (load) {
    return (
      <div className="body">
        <div className="width">
          <div
            className="container"
            id="container"
            style={{
              backgroundImage: color,
            }}
          >
            <form id="form" onSubmit={launchCity}>
              <input
                type="text"
                placeholder="Enter city..."
                id="search"
                onChange={changeCity}
              />
              <button className="sub">
                <i className="fas fa-search-location"></i>
              </button>
              <button className="current">
                <i className="fas fa-map-marker-alt"></i>
              </button>
            </form>
            <Weather data={weather} />
          </div>

          <Footer />
        </div>
      </div>
    );
  } else {
    search();
    return (
      <div>
        <h1>Loading....</h1>
        <Footer />
      </div>
    );
  }
}

export default App;
