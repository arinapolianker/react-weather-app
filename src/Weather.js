import "./App.css";
import FormattedDate from "./FormattedDate";
import SunTime from "./SunTime";
import TempConvert from "./TempConvert";
import WeatherForecast from "./WeatherForecast";
import WeatherIcons from "./WeatherIcons";

export default function Weather(props) {
  return (
    <div>
      <section className="main">
        <div>
          <WeatherIcons icon={props.data.icon} width={160} />
        </div>
        <h2>
          <TempConvert temp={props.data.temp} />
        </h2>
        <h3>{props.data.name}</h3>
        <h5>
          <FormattedDate date={props.data.date} />
        </h5>
        <h4>{props.data.description}</h4>
      </section>
      <br />

      <SunTime suntime={props.data} />

      <div className="row" id="WHF">
        <div className="col-4">
          <p className="w">
            WIND<i className="fas fa-wind"></i>
            <br />
            <span id="w">{Math.round(props.data.wind)} km/h</span>
          </p>
        </div>
        <div className="col-4">
          <p className="h">
            HUMIDITY<i className="fas fa-tint"></i>
            <br />
            <span id="h">{props.data.humidity}%</span>
          </p>
        </div>
        <div className="col-4">
          <p className="f">
            FEELS LIKE <i className="fas fa-temperature-low"></i>
            <br />
            <span id="f">{Math.round(props.data.feelsLike)}°C</span>
          </p>
        </div>
      </div>

      <hr />
      <WeatherForecast coords={props.data.coords} />
    </div>
  );
}
