import React from 'react'

//render weather data
function Weather(props) {
    const data = props.data
    //weather symbol from openweathermap.org
    const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`

    //set precipitation text if present
    const precipitation = () => {
        let message = 'None'
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

    //set wind direction as a string
    const direction = (num) => {
        const dirs = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N']
        const dir = Math.floor(num / 22.5)
        return dirs[dir]
    }

    return (
        <div className="flex-container-column">
            <h3 className="capitals">{data.weather[0].description}</h3>
            <img className="symbol" src={icon} alt="weather icon" />
            <div>
                <div className="row"><span>Temp: </span><span>{data.main.temp} Fahrenheit</span></div>
                <div className="row"><span>Feels Like: </span><span>{data.main.feels_like} Fahrenheit</span></div>
            </div>
            <div>
                <div className="row"><span>Cloud Cover: </span><span>{data.clouds.all}%</span></div>
                <div className="row"><span>Precipitation: </span><span>{precipitation()}</span></div>
            </div>
            <div>
                <div className="row"><span>Pressure: </span><span>{data.main.pressure} in</span></div>
                <div className="row"><span>Humidity: </span><span>{data.main.humidity}%</span></div>
                <div className="row"><span>Wind:</span> <span>{data.wind.speed} mph {direction(data.wind.deg)}</span></div>
            </div>
        </div >
    )
}

export default Weather