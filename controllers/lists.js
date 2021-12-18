const List = require('..models/list');
const router = require('express').Router();

//CREATE

//READ

//Index
router.get('/', async (req, res) => {
	try {
		const foundLists = await List.find({});
		res.status(200).json(foundLists);
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: error.message });
	}
});
//Show
router.get('/:id', async (req, res) => {
	try {
		const foundList = await List.findById(req.params.id);
		res.status(200).json(foundList);
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: error.message });
	}
});

//UPDATE

//DELETE
