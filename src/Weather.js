import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormDate from "./FormDate";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary W-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="clearfix">
          <div className="tempWeather">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">
              <span className="unitCels">C</span>
              <span className="unitFaren">|F</span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li> Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "197ef3a642b76eef90e131866f74a0a0";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "Loading";
  }
}
