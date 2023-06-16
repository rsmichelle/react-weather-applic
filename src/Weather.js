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
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Virginia</h1>
      <ul>
        <li>Wednesday 10:36</li>
        <li>Clear</li>
      </ul>
      <p>
        <im></im>6 C|F
      </p>
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
