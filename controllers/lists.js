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

//UPDATE

//DELETE
