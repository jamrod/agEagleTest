const fetch = require('node-fetch')
const keys = require('./keys')

const randomKey = keys.randomKey
const weatherKey = keys.weatherKey

const getNumbers = (x) => {
    console.log('getnumbers ', x)
    url = 'https://api.random.org/json-rpc/2/invoke'
    bod = {
        "jsonrpc": "2.0",
        "method": "generateIntegers",
        "params": {
            "apiKey": randomKey,
            "n": x,
            "min": -180,
            "max": 180,
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
            .then(json => resolve(json.result.random.data))
            .catch(err => reject(err))
    })

}

const getWeather = (points) => {
    console.log('getWeather ', points)
    lat = points[0]
    lon = points[1]
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherKey}`
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
    })
}

const getPoints = (nums) => {
    console.log('getPoints ', nums)
    return new Promise((resolve, reject) => {
        let points = []
        for (let i = 0; i < nums.length; i = i + 2) {
            let lat = nums[i] / 2
            let lon = nums[i + 1]
            points.push({ lat: lat, lon: lon })
        }
        console.log('output of getPoints ', points)
        resolve(points)

    })

}

const getAllWeather = (arr) => {
    let out = []
    return new Promise((resolve, reject) => {
        arr.forEach((item, i) => {
            getWeather([item.lat, item.lon])
                .then(data => {
                    console.log('data ', data)
                    out.push(data)
                    i === arr.length - 1 ? resolve(out) : null
                })
                .catch(err => console.log(err))
        })

    })
}

const returnData = (num) => {
    const count = num * 2
    return new Promise((resolve, reject) => {
        getNumbers(count)
            .then(nums => {
                getPoints(nums)
                    .then(points => {
                        getAllWeather(points)
                            .then(data => resolve(data))
                    })
            })
            .catch(err => reject(err))
    })

}



exports.returnData = returnData