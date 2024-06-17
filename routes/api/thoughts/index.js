const router = require('express').Router();
const {
	getThoughts,
	getThoughtById,
	createThought,
	updateThought,
} = require('../../../controllers/thoughtController');

// /api/thoughts GET all thoughts and create thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId GET thought by id and update thought
router.route('/:thoughtId').get(getThoughtById).put(updateThought);

module.exports = router;
