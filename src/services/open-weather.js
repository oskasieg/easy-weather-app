const API_KEY = "948a22dd8e82e8e712606d19fa3101fd";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&q=`;

async function fetchWeather(newLocation) {
    
  const response = await fetch(`${API_URL}${newLocation}`);
  const data = await response.json();

  return mapOpenWeatherToDomainModel(data);
}

function mapOpenWeatherToDomainModel(data) {
  return {
    city: data.name,
    temperature: Math.round(data.main.temp),
    iconId: data.weather[0].icon,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    cloudiness: data.clouds.all
  };
}

export { fetchWeather };
