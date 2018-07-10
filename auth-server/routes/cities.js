import bodyParser from 'body-parser'
import express from 'express'
const citiesapp = express()
citiesapp.use(bodyParser.json())
citiesapp.use(bodyParser.urlencoded({extended: false}))


const router = express.Router()
router.get('/cities', (req, res) => {
    const cities = [
        {name: 'New York City', population: 8175133},
        {name: 'Los Angeles',   population: 3792621},
        {name: 'Chicago',       population: 2695598}
    ]
    res.json(cities)
})
citiesapp.use(router)
citiesapp.set('port', (process.env.PORT || 3001))
citiesapp.listen(citiesapp.get('port'), () => {
    console.log(`Listening on ${citiesapp.get('port')}`)
})


module.exports = router;