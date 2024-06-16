const { User, Thought } = require('../models');

// GET all users /api/users
const getUsers = async (req, res) => {
	try {
		const users = await User.find();

		res.status(200).json(users);
	} catch (error) {
		console.log(`Error at GET /api/users`, error);
		res.status(500).json(error);
	}
};

// POST new user /api/users
const createUser = async (req, res) => {
	try {
		const newUser = await User.create({
			username: req.body.username,
			email: req.body.email,
		});

		console.log(newUser);
		res.status(200).json(newUser);
	} catch (error) {
		console.log(`Error at POST /api/users`, error);
		res.status(500).json(error);
	}
};

module.exports = {
	getUsers,
	createUser,
};
