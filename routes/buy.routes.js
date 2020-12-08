const express = require('express')
const router = express.Router()
const buyModel = require('../models/buy.model')

router.get('/', (req, res) => {
    buyModel.find()
        .then((stuff) => {
            console.log(stuff)
            res.render('landing.hbs', {stuff})
        })
})






module.exports = router