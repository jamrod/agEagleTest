# Weather app

Returns current weather from random points across the globe.

## Functionality

Enter a number of points to return and the app will randomly generate that many coordinates and return the current weather at that locale. Will not return more than 10 at a time.

## Models

- Home

  - Input

- Locale

  - State
  - Coordinates, lattitude and longitude

- Weather

  - Temp
  - Description
  - icon
  - rain or snow
  - wind
  - pressure
  - humidity

- Map

## Sample Raw Data

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
