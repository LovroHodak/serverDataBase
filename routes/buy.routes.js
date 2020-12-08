const express = require('express')
const router = express.Router()
const buyModel = require('../models/buy.model')

router.get('/', (req, res) => {
    buyModel.find()
        .then((stuff) => {
            //console.log(stuff)
            res.render('landing.hbs', {stuff})
        })
})

router.post('/', (req, res) => {
    console.log('req.body is: ', req.body)
    buyModel.create(req.body).then((res) => {
        console.log('data added : ', res)
    })
})






module.exports = router