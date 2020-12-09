require('dotenv').config()
const express = require('express')
const app = express()
const logger = require('morgan');
const port = process.env.PORT

//const mongoose = require('mongoose')
require('./config/db.config')

const buyRoutes = require('./routes/buy.routes')
const buyModel = require('./models/buy.model')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(logger('dev'));


const hbs = require('hbs')
hbs.registerPartials(__dirname + '/views/partials')

// USE
app.use(express.static(__dirname + '/public'))
app.use('/', buyRoutes)

// SET
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

// LISTEN
app.listen(port, () => {
    console.log(`Example Lovro app listening at http://localhost:${port}`)
    console.log(__dirname)
  })
  