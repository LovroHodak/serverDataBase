const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/baseAndServer', { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then(() => {
        console.log('DB connected')
    })
    .catch((err) => {
        console.log('Error: ', err)
})