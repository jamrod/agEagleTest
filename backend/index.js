const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const keys = require('./keys')
// const weatherController = require('./controllers/weather')
const randomKey = keys.randomKey
const weatherKey = keys.weatherKey

const app = express()
app.use(cors())

const getNumbers = (x) => {
    url = 'https://api.random.org/json-rpc/2/invoke'
    bod = {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": randomKey,
            "n": x,
            "min": 1,
            "max": 6,
            "replacement": true
        },
        "id": 0
    }
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "POST",
            body: JSON.stringify(bod)
            ,
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(json => resolve(json))
            .catch(err => reject(err))
    })

}

const getWeather = (points) => {
    lat = points[0]
    lon = points[1]
    console.log(lat, lon)
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}`
    console.log(url)
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}


// app.use('/weather', weatherController)

app.get("/:num", async (req, res) => {
    num = req.params.num
    // getNumbers(num)
    //     .then(results => res.json(results))
    //     .catch(err => console.log(err))
    getWeather([40, -100])
        .then(results => res.json(results))
        .catch(err => console.log(err))

});

app.listen(3000, () => console.log("running on port 3000!"))