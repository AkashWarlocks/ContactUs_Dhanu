const express = require('express')
var bodyParser = require('body-parser')
//const routes = require('/routes.js')


let routes = require('./routes/routes')

const app = express()

const port = process.env.PORT || 3000

app.use(
    bodyParser.json()
)

app.use(routes)


app.listen(port, () => {
    console.log('Server is running on port' + port)
}) 