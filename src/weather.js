const FREEZING_POINT_F = 32;
const CONVERSION_FACTOR = 5 / 9;

export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - FREEZING_POINT_F) * CONVERSION_FACTOR;
}

export function getWeatherDescription(celsius) {
    if (celsius < 0) return "Freezing"
    if (celsius < 15) return "Cold"
    if (celsius < 25) return "Warm"
    return "Hot"
}