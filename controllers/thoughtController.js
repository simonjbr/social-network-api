const { User, Thought } = require('../models');

// GET all thoughts /api/thoughts
const getThoughts = async (req, res) => {
	try {
		const thoughts = await Thought.find();
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

		const thought = await Thought.findById(thoughtId);
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

module.exports = {
	getThoughts,
	getThoughtById,
};
