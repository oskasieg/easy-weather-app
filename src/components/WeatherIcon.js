import React from "react";

const WeatherIcon = props => {
  const data = { ...props };

  return (
    <div className="column weather-column">
      <img
        alt="weather icon"
        src="http://openweathermap.org/img/wn/04d@2x.png"
      />
      <div className="temperature-label">{data.temperature}</div>
    </div>
  );
};

export default WeatherIcon;
