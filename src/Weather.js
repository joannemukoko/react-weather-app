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
      <h1>London</h1>
      <ul className="description">
        <li>Tuesday 10th May </li>
        <li>17:27 </li>
        <li className="text-capitalize">cloudy </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="#0969da"
            size={50}
            animate={true}
          />
          <span className="temperature">6</span>{" "}
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul className="wind">
            <li> Humidity: 40%</li>
            <li> Wind: 2 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
