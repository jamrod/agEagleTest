const express = require('express')
const cors = require('cors')

const weather = require('./weather')
const map = require('./map')

const app = express()

app.use(cors())

app.get("/:num", async (req, res) => {
    const num = req.params.num
    console.log(req.params)
    weather.returnData(num)
        .then(results => {
            console.log(results)
            res.json(results)
        })
        .catch(err => console.log(err))
})

<<<<<<< HEAD
=======
app.get("/map/:lat/:lon", async (req, res) => {
    const lat = req.params.lat
    const lon = req.params.lon
    map.getMap([lat, lon])
        .then(results => {
            console.log('got map')
            res.json(results)
        })
        .catch(err => console.log(err))
})

>>>>>>> mergable
app.listen(4000, () => console.log("running on port 4000!"))