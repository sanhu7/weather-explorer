import { getWeatherDescription, getWindDescription } from "./weather.js";

export function renderWeatherCard({ city, temperature, windSpeed }) {
    const result = document.getElementById('weather-result')
    result.innerHTML = `

    <div class="weather-card">
        <h2>${city}</h2>
        <p>Temperature: ${temperature}°C - ${getWeatherDescription(temperature)}</p>
        <p>Wind Speed: ${windSpeed} mph - ${getWindDescription(windSpeed)}</p>
    </div>
    
    `
}