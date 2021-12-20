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
router.put('/:id', async (req, res) => {
	try {
		const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		});
		res.status(200).json(updatedList);
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: error.message });
	}
});
//DELETE

router.delete('/:id', async (req, res) => {
	try {
		const deletedList = await List.findByIdAndDelete(req.params.id);
		res.status(200).json(updatedList);
	} catch (error) {
		console.error(error);
		res.status(400).json({ message: error.message });
	}
});
