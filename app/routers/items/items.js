const router = require('express').Router()

const controller = require('../../controllers/items/items')

router.get('/', controller.getItems)
router.delete('/', controller.delItems)
router.post('/', controller.postItem)
router.get('/:item', controller.getItem)
router.delete('/:item', controller.delItem)

module.exports = router