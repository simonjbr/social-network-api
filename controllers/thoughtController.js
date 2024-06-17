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

module.exports = {
	getThoughts,
};
