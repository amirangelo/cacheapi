const express = require('express')

const app = express()

app.use('/items', require('./routers/items/items'))

module.exports = app