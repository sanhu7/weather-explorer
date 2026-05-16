# 🌤️ Weather Explorer

En webbapplikation där användare kan söka efter aktuellt väder i vilken stad som helst i världen, byggd med HTML, CSS, JavaScript och Open-Meteo API.

***

## 🚀 Funktioner

- Sök efter aktuellt väder med stadsnamn
- Visar temperatur och vindhastighet med beskrivningar
- Responsiv design — fungerar på mobil och desktop
- About-sida med information om appen
- Snabbvalsknappar för populära städer

***

## 🛠️ Teknikstack

| Teknologi | Användning |
|---|---|
| HTML & CSS | Struktur och styling |
| JavaScript (ES Modules) | Applogik och API-anrop |
| [Open-Meteo API](https://open-meteo.com) | Väderdata (gratis, ingen API-nyckel krävs) |
| [Geocoding API](https://open-meteo.com/en/docs/geocoding-api) | Konverterar stadsnamn till koordinater |
| Google Fonts – Nunito | Typografi |
| Vite | Utvecklingsserver och byggverktyg |
| Vitest | Enhetstester och integrationstester |
| Cypress | End-to-End-tester |

***

## 📁 Projektstruktur

```
weather-explorer/
├── index.html                        # Hemsida – sökformulär
├── about.html                        # About-sida
├── style.css                         # Gemensam styling
├── src/
│   ├── main.js                       # Appens startpunkt
│   ├── weather.js                    # Väderlogik-funktioner
│   ├── ui.js                         # DOM-rendering-funktioner
│   └── api.js                        # API-funktioner
├── cypress/
│   └── e2e/
│       └── weather.cy.js             # End-to-End-tester
└── tests/
    ├── unit/
    │   ├── weather.test.js           # Enhetstester – JS-funktioner
    │   └── ui.test.js                # Enhetstester – DOM
    └── integration/
        └── api.test.js               # Integrationstester – REST API
```

***

## ⚙️ Installation och start

1. **Klona projektet**
```bash
git clone <din-repo-url>
cd weather-explorer
```

2. **Installera beroenden**
```bash
npm install
```

3. **Starta utvecklingsservern**
```bash
npx vite
```

4. Öppna webbläsaren på `http://localhost:5173`

***

## 🧪 Köra tester

### Enhetstester och integrationstester (Vitest)
```bash
npm test
```

### End-to-End-tester (Cypress)

Se till att utvecklingsservern körs först:
```bash
npx vite
```

Öppna sedan en ny terminal:
```bash
npx cypress open
```

***

## 🧪 Testöversikt

### Enhetstester – JavaScript-funktioner (`tests/unit/weather.test.js`)

Testar väderlogikens hjälpfunktioner:

| Funktion | Vad testas |
|---|---|
| `fahrenheitToCelsius` | Konverterar °F till °C korrekt |
| `getWeatherDescription` | Returnerar Freezing / Cold / Warm / Hot baserat på temperatur |
| `getWindDescription` | Returnerar Calm / Breezy / Windy / Stormy baserat på vindhastighet |

### Enhetstest – DOM (`tests/unit/ui.test.js`)

Testar att `renderWeatherCard` renderar väderdata korrekt i HTML-sidan:

- Visar stadsnamnet
- Visar temperatur med `°C`
- Visar väderbeskrivning (t.ex. "Warm")

### Integrationstest – REST API (`tests/integration/api.test.js`)

Testar att appen kan ansluta till det riktiga Open-Meteo REST API:et:

- `fetchCoordinates('Stockholm')` returnerar `lat` och `lon`
- `fetchWeatherData(lat, lon)` returnerar `temperature` och `windSpeed`

### End-to-End-test (`cypress/e2e/weather.cy.js`)

Simulerar en riktig användarinteraktion:

1. Användaren besöker `http://localhost:5173`
2. Skriver "Stockholm" i sökfältet
3. Klickar på **Search**-knappen
4. Verifierar att `#weather-result` innehåller **Stockholm**, **Temperature** och **Wind Speed**

***

## 📡 API

Appen använder två gratis API:er från [Open-Meteo](https://open-meteo.com) — ingen API-nyckel krävs.

**Geocoding API** – konverterar stadsnamn till koordinater:
```
https://geocoding-api.open-meteo.com/v1/search?name={city}&count=1
```

**Weather API** – hämtar aktuellt väder med koordinater:
```
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true
```

***

## ✅ Uppgiftskrav

| Krav | Lösning |
|---|---|
| Enkel JavaScript-applikation | Weather Explorer |
| Minst 2 HTML-sidor | `index.html` + `about.html` |
| Minst 3 JavaScript-filer | `api.js`, `ui.js`, `weather.js`, `main.js` |
| Populerar sidor med data | Väderdata från API visas i HTML |
| Enhetstest – 2 JS-funktioner | `weather.test.js` – `getWeatherDescription`, `getWindDescription`, `fahrenheitToCelsius` |
| Enhetstest – DOM | `ui.test.js` – `renderWeatherCard` |
| Integrationstest – REST API | `api.test.js` – `fetchCoordinates`, `fetchWeatherData` |
| E2E-test – knapp → API → HTML | `weather.cy.js` – söker Stockholm → data visas |

***

## 📄 Licens

© 2026 Weather Explorer —Byggd med Open-Meteo API