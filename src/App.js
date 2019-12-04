import React from "react";
import Weather from "./components/Weather";
import LocationInput from "./components/LocationInput";
import "bulma/css/bulma.min.css";
import { fetchWeather } from "./services/open-weather";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: ''
    };
  }

  componentDidMount() {
    this.getWeather("Berlin");
  }

  async getWeather(newLocation) {
    console.log(newLocation);

    const weatherData = await fetchWeather(newLocation);
    console.log(weatherData);

    this.setState({
      weatherData: weatherData
    })
  }

  render() {
    return (
      <div className="App">
        <LocationInput onSubmit={this.getWeather} />
        <Weather weatherData={this.state.weatherData} />;
      </div>
    );
  }
}

export default App;
