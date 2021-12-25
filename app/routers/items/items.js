const router = require('express').Router()

const controller = require('../../controllers/items/items')

router.get('/', controller.getItems)
router.delete('/', controller.delItems)
router.get('/:item', controller.getItem)
router.delete('/:item', controller.delItem)
router.post('/:item', controller.postItem)

module.exports = router