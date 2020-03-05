const fetch = require('node-fetch')
const keys = require('./keys')

const weatherKey = keys.weatherKey

const getMap = (points) => {
    lat = points[0]
    lon = points[1]
    url = `https://tile.openweathermap.org/map/precipitation_new/7/${lat}/${lon}.png?appid=${weatherKey}`
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => {
                console.log(res)
                res.json()
            })
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

exports.getMap = getMap