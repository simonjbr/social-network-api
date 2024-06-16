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

// GET a user by id /api/users/:userId
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

// PUT update user /api/users/:userId
const updateUser = async (req, res) => {
	try {
		const userId = req.params.userId;

		const user = await User.findByIdAndUpdate(
			userId,
			{
				$set: {
					username: req.body.username,
					email: req.body.email,
				},
			},
			{
				new: true,
			}
		);

		if (!user) {
			res.status(404).json({ message: `No user with _id: ${userId}` });
		}

		res.status(200).json(user);
	} catch (error) {
		console.log(`Error at PUT /api/users/:userId`, error);
		res.status(500).json(error);
	}
};

// DELETE user /api/users/:userId
const deleteUser = async (req, res) => {
	try {
		const userId = req.params.userId;

		// delete user by id
		const user = await User.findByIdAndDelete(userId);

		if (!user) {
			res.status(404).json({ message: `No user with _id: ${userId}` });
		}

		// delete associated thoughts
		await Thought.deleteMany({
			_id: {
				$in: user.thoughts,
			},
		});

		res.status(200).json({
			message: `User with id: ${userId} and associated thoughts successfully deleted`,
		});
	} catch (error) {
		console.log(`Error at DELETE /api/users/:userId`, error);
		res.status(500).json(error);
	}
};

// POST add new friend /api/users/:userId/friends/:friendId
const addFriend = async (req, res) => {
	try {
		const userId = req.params.userId;
		const friendId = req.params.friendId;

		const friend = await User.findById(friendId);

		if (!friend) {
			res.status(404).json({ message: `No user with _id: ${friendId}` });
		}

		const user = await User.findByIdAndUpdate(
			userId,
			{
				$addToSet: {
					friends: friendId,
				},
			},
			{
				runValidators: true,
				new: true,
			}
		).populate('friends');

		if (!user) {
			res.status(404).json({ message: `No user with _id: ${userId}` });
		}

		res.status(200).json(user);
	} catch (error) {
		console.log(
			`Error at POST /api/users/:userId/friends/:friendId`,
			error
		);
		res.status(500).json(error);
	}
};

module.exports = {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
};
