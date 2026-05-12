import { describe, it, expect } from 'vitest';
import { fetchWeatherData, fetchCoordinates } from '../../src/api.js';

describe('API Integration Tests', () => {
    it('should fetches coordinates for a city', async () => {
        const results = await fetchCoordinates('Stockholm')
        expect(results).toHaveProperty('lat')
        expect(results).toHaveProperty('lon')
    });

    it('should fetches weather data using coordinates', async () => {
        const results = await fetchWeatherData(59.33, 18.07)
        expect(results).toHaveProperty('temperature')
        expect(results).toHaveProperty('windSpeed')
    });
});
