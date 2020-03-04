import React from 'react'

function Weather(props) {
    let message = 'None'
    const data = props.data
    const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    const percipitation = () => {
        let hr
        let value
        if (data.rain) {
            if (data.rain['3h']) {
                hr = '3 hours'
                value = data.rain['3h']
            } else {
                hr = '1 hour'
                value = data.rain['1h']
            }
            message = `${value} inches of Rainfall over the past ${hr}`
        }
        if (data.snow) {
            if (data.snow['3h']) {
                hr = '3 hours'
                value = data.snow['3h']
            } else {
                hr = '1 hour'
                value = data.snow['1h']
            }
            message = `${value} inches of Snowfall over the past ${hr}`
        }
        return message
    }
    return (
        <div className="weather">
            <h3>{data.weather[0].description}</h3>
            <img src={icon} />
            <p>
                Temp: {data.main.temp} Fahrenheit
                <br />
                Feels Like: {data.main.feels_like} Fahrenheit
            </p>
            <p>
                Cloud Cover: {data.clouds.all}%
                <br />
                Percipitation: {percipitation()}
            </p>
            <p>Wind {data.wind.speed}, direction: {data.wind.deg}</p>
            <p>Pressure: {data.main.pressure}</p>
            <p>Humidity: {data.main.humidity}</p>
        </div >
    )
}

export default Weather