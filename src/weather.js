const FREEZING_POINT_F = 32;
const CONVERSION_FACTOR = 5 / 9;

export function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - FREEZING_POINT_F) * CONVERSION_FACTOR;
}
