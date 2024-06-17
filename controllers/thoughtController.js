const { User, Thought } = require('../models');

// GET all thoughts /api/thoughts
const getThoughts = async (req, res) => {
	try {
		const thoughts = await Thought.find().populate('reactions');
		if (!thoughts) {
			res.status(404).json({
				message: `Could not find any thoughts.`,
			});
			return;
		}

		res.status(200).json(thoughts);
	} catch (error) {
		console.log(`Error at GET /api/thoughts`, error);
		res.status(500).json(error);
	}
};

// GET thought by id /api/thoughts/:thoughtId
const getThoughtById = async (req, res) => {
	try {
		const thoughtId = req.params.thoughtId;

		const thought = await Thought.findById(thoughtId).populate('reactions');
		if (!thought) {
			res.status(404).json({
				message: `Could not find thought with id: ${thoughtId}`,
			});
			return;
		}

		res.status(200).json(thought);
	} catch (error) {
		console.log(`Error at GET /api/thoughts/:thoughtId`, error);
		res.status(500).json(error);
	}
};

// POST new thought /api/thoughts
const createThought = async (req, res) => {
	try {
		const newThought = await Thought.create({
			thoughtText: req.body.thoughtText,
			username: req.body.username,
		});

		const updateUser = await User.findByIdAndUpdate(
			req.body.userId,
			{
				$addToSet: {
					thoughts: newThought._id,
				},
			},
			{
				runValidators: true,
				new: true,
			}
		);

		res.status(200).json(newThought);
	} catch (error) {
		console.log(`Error at POST /api/thoughts`, error);
		res.status(500).json(error);
	}
};

module.exports = {
	getThoughts,
	getThoughtById,
	createThought,
};
