const mongoose = require('mongoose')

const config = require('../../config')
const Schema = mongoose.Schema

var ItemSchema = new mongoose.Schema(
  { lastUpdate: { type: Date, expires: config.app.cache.ttl, default: Date.now }
  ,	key: { type: String, unique: true }
  , value: { type: String }
  }
)

module.exports = mongoose.model('Item', ItemSchema)
