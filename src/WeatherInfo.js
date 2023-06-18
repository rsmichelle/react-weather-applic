import React from "react";
import FormDate from "./FormDate";
import WeatherTemp from "./WeatherTemp";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="clearfix">
        <div className="tempWeather">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="float-left"
          />
          <WeatherTemp celsius={props.data.temperature} />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li> Wind: {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
