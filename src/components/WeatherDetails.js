import React from "react";

const WeatherDetails = props => (
  <div className="column">
    <ul>
      <li>Wilgotność: {props.details.weatherData.humidity}%</li>
      <li>Wiatr: {props.details.weatherData.windSpeed} km/h</li>
      <li>Zachmurzenie: {props.details.weatherData.cloudiness}%</li>
    </ul>
  </div>
);

export default WeatherDetails;
