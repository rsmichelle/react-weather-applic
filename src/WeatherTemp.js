import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          {" "}
          °C |{""}
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheitTemp = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <span className="temperature">{Math.round(fahrenheitTemp)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
          {""} | °F
        </span>
      </div>
    );
  }
}
