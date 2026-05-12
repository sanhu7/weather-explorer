import { fetchCoordinates, fetchWeatherData } from "./api.js";
import { renderWeatherCard } from "./ui.js";

const form = document.getElementById('weather-form')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const city = e.target.city.value

    const coords = await fetchCoordinates(city)
    const weather = await fetchWeatherData(coords.latitude, coords.longitude)
    console.log('Väder:', weather)
})
