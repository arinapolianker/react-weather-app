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
    let hours = weather.date.getHours();
    if (hours >= 18 && hours < 6) {
      setColor(
        "linear-gradient(179deg, rgba(31, 58, 109, 1) 3.3%, rgba(53, 87, 150, 1) 100%)"
      );
    } else if (hours >= 6 && hours < 7) {
      setColor(
        "linear-gradient(179deg, rgba(138, 179, 233, 1) 3.3%, rgba(255, 159, 121, 1) 70%, rgba(252, 220, 132, 1) 100%)"
      );
    } else if (hours >= 7 && hours < 17) {
      setColor(
        "linear-gradient(46deg, rgba(45, 130, 241, 1) 3.3%, rgba(181, 221, 247, 1) 100%)"
      );
    } else if (hours >= 17 && hours < 18) {
      setColor(
        "linear-gradient(179deg, rgba(13, 52, 104, 1) 3.3%, rgba(255, 146, 103, 1) 70%, rgba(255, 188, 6, 1) 100%)"
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
  const apiKey = "089de42863cffcedc265abdd75619b42";
  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
  }
  function currentPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let positionUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      axios.get(positionUrl).then(showTemp);
    });
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
              <button className="current" onClick={currentPosition}>
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
