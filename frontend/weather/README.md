# Random Weather

Returns current weather from random points across the globe.

## Requirements

### API:

    Create a REST api that returns a number of random lat and long points with weather data.
        The consumer of the api should be able to specifty the number of returned points
        Weather data can be pulled via an api from Open Weather Map
        Random numbers should be retreived from an outside source ie: Random.org api

### Webapp:

    Create a webapp that consumes the api that you created and displays the data.

## Functionality

Enter a number of points to return and the app will randomly generate that many coordinates and return the current weather at that locale. Will not return more than 60 at a time.

### Technologies

API Express.js
Frontend React.js
Random Coordinates created using Random.org API
Weather data gathered from openweathermap API

### Models

- Input

- Locale

  - Coordinates, lattitude and longitude

- Weather

  - Temp
  - Description
  - icon
  - rain or snow
  - wind
  - pressure
  - humidity

### Sample Raw Data

{
coord: { lon: 38, lat: 48 },
weather: [
{
id: 804,
main: 'Clouds',
description: 'overcast clouds',
icon: '04n'
}
],
base: 'stations',
main: {
temp: 280.04,
feels_like: 276.54,
temp_min: 280.04,
temp_max: 280.04,
pressure: 1017,
humidity: 86,
sea_level: 1017,
grnd_level: 994
},
wind: { speed: 3.31, deg: 180 },
clouds: { all: 100 },
dt: 1583268692,
sys: { country: 'UA', sunrise: 1583208296, sunset: 1583248510 },
timezone: 7200,
id: 702320,
name: 'Makiyivka',
cod: 200
}

https://openweathermap.org/weathermap?basemap=map&cities=false&layer=precipitation&lat=39&lon=-105&zoom=7

## Installation

This repo contains both the API and the react app
