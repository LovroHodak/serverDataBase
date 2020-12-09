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

router.get('/addBuys', (req, res) => {
    res.render('addBuys.hbs')
})

router.post('/addBuys', (req, res) => {
    console.log('req.body is: ', req.body)
    buyModel.create(req.body)
        .then((response) => {
            console.log('data added : ', response)
            res.redirect('/')
    })
})

router.get('/stuff/:id', (req, res) => {
    let id = req.params.id
    //console.log('Req.params are: ', req.params)
    
    buyModel.findById(id)
        .then((item) => {
            console.log('My item: ', item)
            res.render('item-detail.hbs', {item})
        })
})

router.get('/stuff/:id/delete', (req, res) => {
    let id = req.params.id
    buyModel.findByIdAndDelete(id)
        .then(() => {
            console.log('Item deleted')
            res.redirect('/')
        })
})

router.get('/stuff/:id/edit', (req, res) => {
    let id = req.params.id
    buyModel.findById(id)
        .then((editItem) => {
            console.log('My editItem: ', editItem)
            res.render('edit-form.hbs', {editItem})
        })
})

router.post('/stuff/:id/edit', (req, res) => {
    let id= req.params.id
    buyModel.findByIdAndUpdate(id, {$set: req.body})
        .then(() => {
            console.log('Updated stuff!')
            res.redirect('/')
        })
        .catch((err => {
            res.render('error.hbs', {err})
        }))
})




module.exports = router