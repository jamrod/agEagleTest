const express = require('express')
const cors = require('cors')

const weather = require('./weather')
// const weatherController = require('./controllers/weather')


const app = express()
app.use(cors())



app.get("/:num", async (req, res) => {
    num = req.params.num
    weather.returnData(num)
        .then(results => res.json(results))
        .catch(err => console.log(err))
    // getNumbers(num)
    //     .then(results => {
    //         console.log(results.result.random.data)
    //         res.json(results)
    //     })
    //     .catch(err => console.log(err))
    // getWeather([40, -100])
    //     .then(results => res.json(results))
    //     .catch(err => console.log(err))

});

app.listen(3000, () => console.log("running on port 3000!"))