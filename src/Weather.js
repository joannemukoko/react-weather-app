import React from "react";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul>
        <li>Tuesday 10th May </li>
        <li>17:27 </li>
        <li>Partly Cloudy </li>
      </ul>
      <div className="row">
        <div className="col-6">
          6°C
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="#0969da"
            size={40}
            animate={true}
          />
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation: 15%</li>
            <li> Humidity: 45%</li>
            <li> Wind: 10pmh</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
