import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          Coded by Alona Chubenko{" "}
          <a
            href="https://github.com/AlonaCh/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            is open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
