export async function fetchCoordinates(city) {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`)
    const data = await response.json()
    const location = data.results[0]

    return {
        latitude: location.latitude,
        longitude: location.longitude,
        name: location.name,
    }
}

export async function fetchWeatherData(latitude, longitude) {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    const data = await response.json()

    return {
        temperature: data.current_weather.temperature,
        windSpeed: data.current_weather.wind_speed,
    }
}