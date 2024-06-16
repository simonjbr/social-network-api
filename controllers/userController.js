const { User, Thought } = require('../models');

// get all users /api/users
const getUsers = async (req, res) => {
	try {
		const users = await User.find();

		res.status(200).json(users);
	} catch (error) {
		console.log(`Error at /api/users`, error);
		res.status(500).json(error);
	}
};

module.exports = {
	getUsers,
}