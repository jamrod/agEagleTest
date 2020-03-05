const express = require('express')
const cors = require('cors')

const weather = require('./weather')

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

app.listen(4000, () => console.log("running on port 4000!"))