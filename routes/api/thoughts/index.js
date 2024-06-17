const router = require('express').Router();
const {
	getThoughts,
	getThoughtById,
	createThought,
	updateThought,
	deleteThought,
	createReaction,
	deleteReaction,
} = require('../../../controllers/thoughtController');

// /api/thoughts GET all thoughts and create thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId GET thought by id, update thought and delete thought
router
	.route('/:thoughtId')
	.get(getThoughtById)
	.put(updateThought)
	.delete(deleteThought);

// /api/thoughts/:thoughtId/reactions POST new reaction
router.route('/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId DELETE reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
