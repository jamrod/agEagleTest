import React from 'react'

function Weather(props) {
    let message = 'None'
    const data = props.data
    const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
    const precipitation = () => {
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
            message = `Rain ${value} inches over ${hr}`
        }
        if (data.snow) {
            if (data.snow['3h']) {
                hr = '3 hours'
                value = data.snow['3h']
            } else {
                hr = '1 hour'
                value = data.snow['1h']
            }
            message = `Snow ${value} inches over ${hr}`
        }
        return message
    }

    const direction = (num) => {
        const dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N']
        const dir = Math.floor(num / 22.5)
        return dirs[dir]
    }

    return (
        <div className="flex-container-column">
            <h3 className="capitals">{data.weather[0].description}</h3>
            <img className="symbol" src={icon} alt="weather icon" />
            <p>
                <div className="row"><span>Temp: </span><span>{data.main.temp} Fahrenheit</span></div>
                <div className="row"><span>Feels Like: </span><span>{data.main.feels_like} Fahrenheit</span></div>
            </p>
            <p>
                <div className="row"><span>Cloud Cover: </span><span>{data.clouds.all}%</span></div>
                <div className="row"><span>Precipitation: </span><span>{precipitation()}</span></div>
            </p>
            <p>
                <div className="row"><span>Pressure: </span><span>{data.main.pressure}</span></div>
                <div className="row"><span>Humidity: </span><span>{data.main.humidity}</span></div>
                <div className="row"><span>Wind Speed:</span> <span>{data.wind.speed} mph</span></div>
                <div className="row"><span>Wind Direction:</span> <span>{data.wind.deg} {direction(data.wind.deg)}</span></div>
            </p>
        </div >
    )
}

export default Weather