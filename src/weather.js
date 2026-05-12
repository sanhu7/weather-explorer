const FREEZING_POINT_F = 32;
const CONVERSION_FACTOR = 5 / 9;
const FREEZING = 0
const COLD_MAX = 15
const WARM_MAX = 25
const CALM_MAX = 5
const BREEZY_MAX = 20
const WINDY_MAX = 40

//weather logic functions
export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - FREEZING_POINT_F) * CONVERSION_FACTOR;
}

export function getWeatherDescription(celsius) {
    if (celsius < FREEZING) return "Freezing"
    if (celsius < COLD_MAX) return "Cold"
    if (celsius < WARM_MAX) return "Warm"
    return "Hot"
}

export function getWindDescription(windSpeed) {
    if (windSpeed <= CALM_MAX) return "Calm"
    if (windSpeed <= BREEZY_MAX) return "Breezy"
    if (windSpeed <= WINDY_MAX) return "Windy"
    return "Stormy"
}