import { describe, it, expect } from 'vitest'
import { fahrenheitToCelsius, getWeatherDescription } from '../../src/weather.js'

describe('fahrenheitToCelsius', () => {
    it('should convert 32°F to 0°C', () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
    });

    it('should convert 212°F to 100°C', () => {
        expect(fahrenheitToCelsius(212)).toBe(100);
    });

    it('should convert negative temperatures', () => {
        expect(fahrenheitToCelsius(14)).toBe(-10);
    });
});

describe("getWeatherDescription", () => {
    it('should returns "Freezing" for temperatures below 0°C', () => {
        expect(getWeatherDescription(-5)).toBe("Freezing");
    });

    it('should returns "Cold" for temperatures between 0°C and 14°C', () => {
        expect(getWeatherDescription(10)).toBe("Cold");
    });

    it('should returns "Warm" for temperatures between 15°C and 24°C', () => {
        expect(getWeatherDescription(20)).toBe("Warm");
    });

    it('should returns "Hot" for temperatures above 25°C', () => {
        expect(getWeatherDescription(30)).toBe("Hot");
    });
})