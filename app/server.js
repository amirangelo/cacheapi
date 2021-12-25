const express = require('express')
const mongoose = require('mongoose')

const config = require('./config')
const app = require('./index')

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://${config.mongodb.host}:${config.mongodb.port}/cacheapi`)
  app.listen(config.express.port)
  console.log(`listening on port:`, config.express.port)
}

