import WeatherIcons from "./WeatherIcons";
import "./App.css";

export default function ForecastDay(props) {
  function dayName() {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.day.dt * 1000);
    let day = days[date.getDay()];
    return day;
  }

  return (
    <div>
      <WeatherIcons icon={props.day.weather[0].icon} />
      <div className="forecast-temp">
        <strong>{Math.round(props.day.temp.day)}°</strong>
      </div>
      <div className="forecast-day">{dayName()}</div>
    </div>
  );
}
