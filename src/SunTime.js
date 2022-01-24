import "./App.css";

export default function SunTime(props) {
  function sunrise() {
    let sunriseDate = new Date(props.suntime.sunrise * 1000);
    let sunriseHour = sunriseDate.getHours();

    if (sunriseHour < 10) {
      sunriseHour = `0${sunriseHour}`;
    }
    let sunriseMin = sunriseDate.getMinutes();
    if (sunriseMin < 10) {
      sunriseMin = `0${sunriseMin}`;
    }
    return `${sunriseHour}:${sunriseMin}`;
  }
  function sunset() {
    let sunsetDate = new Date(props.suntime.sunset * 1000);
    let sunsetHour = sunsetDate.getHours();

    if (sunsetHour < 10) {
      sunsetHour = `0${sunsetHour}`;
    }
    let sunsetMin = sunsetDate.getMinutes();
    if (sunsetMin < 10) {
      sunsetMin = `0${sunsetMin}`;
    }
    return `${sunsetHour}:${sunsetMin}`;
  }

  return (
    <div>
      <div className="row" id="sunRS">
        <div className="col-6">
          <p>
            SUNRISE<i className="far fa-sun"></i> <br />
            <span id="sunrise">{sunrise()}</span>
          </p>
        </div>
        <div className="col-6">
          <p>
            SUNSET<i className="far fa-moon"></i>
            <br />
            <span id="sunset">{sunset()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
