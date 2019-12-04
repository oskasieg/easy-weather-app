import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherDetails from "./WeatherDetails";

const Weather = props => (
  <div className="section">
    <div className="container">
      <div className="tile is-vertical is-6 notification is-info">
        <h1 className="title">{props.weatherData.city}</h1>
        <div className="columns is-vcentered ">
          <WeatherIcon temperature={props.weatherData.temperature} />
          <WeatherDetails details={props} />
        </div>
      </div>
    </div>
  </div>
);

export default Weather;
