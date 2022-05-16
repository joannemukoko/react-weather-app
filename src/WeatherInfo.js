import React from "react";
import FormattedDate from "./FormattedDate";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="description">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description} </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="#0969da"
            size={50}
            animate={true}
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>{" "}
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul className="wind">
            <li> Humidity: {props.data.humidity}%</li>
            <li> Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
