import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project was coded by {""}{" "}
          <a href="https://www.linkedin.com/in/joannemukoko/" target="_blank">
            Joanne Mukoko
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/joannemukoko/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
