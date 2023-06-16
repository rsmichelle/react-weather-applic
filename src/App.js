import React from "react";
import "./App.css";
import Weather from "./Weather";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          Coded by Michelle R. {""}
          <a href="https://github.com/rsmichelle/react-weather-applic">
            Open source
          </a>
        </footer>
      </div>
    </div>
  );
}
