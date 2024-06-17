const router = require('express').Router();
const {
	getThoughts,
	getThoughtById,
	createThought,
} = require('../../../controllers/thoughtController');

// /api/thoughts GET all thoughts and create thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId GET thought by id
router.route('/:thoughtId').get(getThoughtById);

module.exports = router;
