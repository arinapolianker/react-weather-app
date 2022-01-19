import React, { useState } from "react";
import "./App.css";

export default function TempConvert(props) {
  const [temp, setTemp] = useState("celsius");

  function celsius(event) {
    event.preventDefault();
    setTemp("celsius");
  }
  function fahrenheit(event) {
    event.preventDefault();
    setTemp("fahrenheit");
  }

  if (temp === "celsius") {
    return (
      <div>
        <span id="deg">{Math.round(props.temp)}°C</span>
        <button className="butC" onClick={celsius}>
          °C
        </button>
        <button className="butF" onClick={fahrenheit}>
          °F
        </button>
      </div>
    );
  } else {
    let fahrenheitTemp = Math.round((props.temp * 9) / 5 + 32);
    return (
      <div>
        <span id="deg">{fahrenheitTemp}°F</span>
        <button className="butC" onClick={celsius}>
          °C
        </button>
        <button className="butF" onClick={fahrenheit}>
          °F
        </button>
      </div>
    );
  }
}
