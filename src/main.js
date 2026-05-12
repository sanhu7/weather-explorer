import { fetchCoordinates, fetchWeatherData } from "./api.js";
import { renderWeatherCard } from "./ui.js";

const form = document.getElementById('weather-form')
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const city = e.target.city.value

    const coords = await fetchCoordinates(city)
    const weather = await fetchWeatherData(coords.lat, coords.lon)
    renderWeatherCard({ ...weather, city: coords.name })
})


const cityInput = document.querySelector('input[name="city"]')
const datalist = document.getElementById('city-suggestions')

cityInput.addEventListener('input', async () => {
    const query = cityInput.value.trim()
    if (query.length < 2) return

    const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5`)
    const data = await res.json()

    datalist.innerHTML = ''
    data.results?.forEach(city => {
        const option = document.createElement('option')
        option.value = `${city.name}, ${city.country}`
        datalist.appendChild(option)
    })
})