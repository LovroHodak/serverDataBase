const mongoose = require('mongoose')

let buySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number
    },
    category: {
        type: String
    }  
})

let Buy = mongoose.model('buy', buySchema)

module.exports = Buy





