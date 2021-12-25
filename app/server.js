const express = require('express')

const config = require('./config')
const app = require('./index')

app.listen(config.express.port)