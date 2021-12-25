const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use('/items', require('./routers/items/items'))

module.exports = app