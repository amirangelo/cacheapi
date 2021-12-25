const Chance = require('chance')
const config = require('../../config')

const Item = require('../../models/item')

const chance = new Chance()

const getItems = async (req, res) => {
  try {
    const items = await Item.find().map(item => {return {key: item.key, value: item.value}})
    res.send({items})
  } catch (e) {
    res.status(500).send()
  }
}

const delItems = async (req, res) => {
  try {
    await Item.deleteMany()
    res.status(204).send()
  } catch (e) {
    res.status(500).send()
  }
}

const getItem = async (req, res) => {
  try {
    const item = await Item.findOne({ key: req.params.item })
    await checkCacheSize()

    if (item) {
      console.log('Cache hit')
      await Item.updateOne({ key: req.params.item }, { lastUpdate: new Date() })
      res.send({key: item.key, value: item.value})
    } else {
      console.log('Cache miss')
      const newItem = new Item({ key: req.params.item, value: chance.sentence() })
      await newItem.save()
      res.send({key: newItem.key, value: newItem.value})
    }
  } catch (e) {
    console.log(e)
    res.status(500).send()
  }
}

const delItem = async (req, res) => {
  try {
    const result = await Item.deleteOne({ key: req.params.item })
    res.status(204).send()
  } catch (e) {
    console.log(e)
  }
}

const postItem = async (req, res) => {
  try {
    await checkCacheSize()
    await item.findOneAndUpdate({key: req.params.item}, {value: chance.sentence()})
    res.send({key: item.key, value: item.value})
  } catch(e) {
    res.status(500).send()
  }
}

// Delete the old item that inserted
const checkCacheSize = async () => {
  const count = await Item.count()
  if (count >= config.app.cache.size) {
    const item = await Item.findOne({}, {}, {sort: {lastUpdate: 1}})
    const result = await Item.deleteOne({ key: item.key })
    if (result.checkCacheSize !== 1) {
      await checkCacheSize()
    }
  }
}

module.exports = {getItems, delItems, getItem, delItem, postItem}
