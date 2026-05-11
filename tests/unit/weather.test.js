import { describe, it, expect } from 'vitest'
import { fahrenheitToCelsius } from '../../src/weather.js'

describe('fahrenheitToCelsius', () => {
    it('should convert 32°F to 0°C', () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
    });

    it('should convert 212°F to 100°C', () => {
        expect(fahrenheitToCelsius(212)).toBe(100);
    });

    it("should convert negative temperatures", () => {
        expect(fahrenheitToCelsius(14)).toBe(-10);
    });
});