const router = require('express').Router();
const {
	getThoughts,
	getThoughtById,
	createThought,
	updateThought,
	deleteThought,
} = require('../../../controllers/thoughtController');

// /api/thoughts GET all thoughts and create thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId GET thought by id, update thought and delete thought
router
	.route('/:thoughtId')
	.get(getThoughtById)
	.put(updateThought)
	.delete(deleteThought);

module.exports = router;
