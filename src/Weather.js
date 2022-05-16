import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
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
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul className="description">
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description} </li>
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
              {Math.round(weatherData.temperature)}
            </span>{" "}
            <span className="units">°C</span>
          </div>
          <div className="col-6">
            <ul className="wind">
              <li> Humidity: {weatherData.humidity}%</li>
              <li> Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "78f7c5478076af4eadd670db8e28a4b6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..";
  }
}
