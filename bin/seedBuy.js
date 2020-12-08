const mongoose = require('mongoose')
const buyModel = require('../models/buy.model')
require('../config/db.config')

buyModel.insertMany([
    {name: 'banana', amount: 2, category: 'fruit'},
    {name: 'ham', amount: 1, category: 'meat'},
    {name: 'cola', amount: 5, category: 'drink'}
]).then(() => {
    console.log('Data seed/bin added')
    mongoose.connection.close()
}).catch((err) => {
    console.log('Smth went wrong: ', err)
})



