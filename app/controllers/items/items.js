const getItems = async (req, res) => {
	console.log(req.params.item)
	res.send({item: req.params.item})
}

const delItems = async (req, res) => {
	console.log(req.params.item)
	res.send({item: req.params.item})
}

const getItem = async (req, res) => {
	console.log(req.params.item)
	res.send({item: req.params.item})
}

const delItem = async (req, res) => {
	console.log(req.params.item)
	res.send({item: req.params.item})
}

const postItem = async (req, res) => {
	console.log(req.params.item)
	res.send({item: req.params.item})
}

module.exports = {getItems, delItems, getItem, delItem, postItem}
