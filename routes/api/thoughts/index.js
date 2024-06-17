const router = require('express').Router();
const { getThoughts, getThoughtById, } = require('../../../controllers/thoughtController');

// /api/thoughts GET all thoughts
router.route('/').get(getThoughts);

// /api/thoughts/:thoughtId GET thought by id
router.route('/:thoughtId').get(getThoughtById);


module.exports = router;
