const FREEZING_POINT_F = 32;
const CONVERSION_FACTOR = 5 / 9;
const FREEZING = 0
const COLD_MAX = 15
const WARM_MAX = 25



export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - FREEZING_POINT_F) * CONVERSION_FACTOR;
}

export function getWeatherDescription(celsius) {
    if (celsius < FREEZING) return "Freezing"
    if (celsius < COLD_MAX) return "Cold"
    if (celsius < WARM_MAX) return "Warm"
    return "Hot"
}