import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=51.5&lon={0.1}&appid=78f7c5478076af4eadd670db8e28a4b6
`;
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon code="01d" size={32} />
          <div className="WeatherForecast-temps">
            <span className="WeatherForecast-temp-max">19° </span>
            <span className="WeatherForecast-temp-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
