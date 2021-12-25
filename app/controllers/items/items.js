const Chance = require('chance')

const Item = require('../../models/item')

const chance = new Chance()

const getItems = async (req, res) => {
  try {
    const items = await Item.find().map(item => {return {key: item.key, value: item.value}})
    res.send({items})
  } catch (e) {

  }
}

const delItems = async (req, res) => {
  try {
    await Item.deleteMany()
    res.status(204).send()
  } catch (e) {
    console.log(e)
  }
}

const getItem = async (req, res) => {
  try {
    const item = await Item.findOne({ key: req.params.item })

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
    await item.findOneAndUpdate({key: req.params.item}, {value: chance.sentence()})
    res.send({key: item.key, value: item.value})
  } catch(e) {

  }
}

module.exports = {getItems, delItems, getItem, delItem, postItem}
