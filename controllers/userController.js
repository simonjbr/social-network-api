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

const getUserById = async (req, res) => {
	try {
		const userId = req.params.userId;
		const user = await User.findById(userId);

		if (!user) {
			res.status(404).json({ message: `No user with _id: ${userId}` });
		}

		res.status(200).json(user);
	} catch (error) {
		console.log(`Error at POST /api/users/:userId`, error);
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
	getUserById,
	createUser,
};
