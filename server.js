const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection')

const app = express()

const PORT = process.env.PORT || 3000

connectDB();

// Parse request to bodyparser
app.use(bodyparser.urlencoded({extended: true}))

// View Engine
app.set('view engine', "ejs")

// loading assets so that we can directly use it
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//Load Router
app.use('/', require('./server/routes/router'))

app.listen(PORT, () => {
    console.log('Server Up and running on....');
})