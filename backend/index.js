const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const keys = require('./keys')
// const weatherController = require('./controllers/weather')
const randomKey = keys.randomKey
const app = express()

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




app.use(cors())
// app.use('/weather', weatherController)
app.get("/:num", async (req, res) => {
    num = req.params.num
    getNumbers(num)
        .then(results => res.json(results))
        .catch(err => console.log(err))




});

app.listen(3000, () => console.log("running on port 3000!"))