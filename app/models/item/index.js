const mongoose = require('mongoose')
const Schema = mongoose.Schema

var ItemSchema = new mongoose.Schema(
  { lastUpdate: { type: Date, expires: '60s', default: Date.now }
  ,	key: { type: String, unique: true }
  , value: { type: String }
  }
)

module.exports = mongoose.model('Item', ItemSchema)
