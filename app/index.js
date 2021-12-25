const express = require('express')
const swaggerUi = require('swagger-ui-express')
const morgan = require('morgan')
const YAML = require('yamljs')

const swaggerDocument = YAML.load(`${__dirname}/routers/items/swagger.yaml`)
const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use('/items', require('./routers/items/items'))
app.use('/docs/items', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

module.exports = app