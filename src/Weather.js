import React from "react";
import "./Weather.css";
export default function Weather() {
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
      <h1>Virginia</h1>
      <ul>
        <li>Wednesday 10:36</li>
        <li>Clear</li>
      </ul>
      <div className="clearfix">
        <div className="tempWeather">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="clear"
            className="float-left"
          />
          <span className="temperature">6</span>
          <span className="unit">
            <span className="unitCels">C</span>
            <span className="unitFaren">|F</span>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Precipitation: </li>
            <li>Humidity:</li>
            <li> Wind:</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Sunrise:</li>
            <li>Sunset:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
