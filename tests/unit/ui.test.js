import { describe, it, expect, beforeEach } from 'vitest';
import { renderWeatherCard } from '../../src/ui.js';

describe('renderWeatherCard', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="weather-result"></div>'
    });

    it('should display the city name', () => {
        renderWeatherCard({ city: 'Stockholm', temperature: 20, windSpeed: 5 })

        const result = document.getElementById('weather-result')
        expect(result.innerHTML).toContain('Stockholm')
    });

    it('should display the temperature', () => {
        renderWeatherCard({ city: 'Stockholm', temperature: 20, windSpeed: 5 })

        const result = document.getElementById('weather-result')
        expect(result.innerHTML).toContain('Temperature: 20°C')
    });
})
