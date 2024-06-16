const router = require('express').Router();
const {
	getUsers,
	getUserById,
	createUser,
	updateUser,
} = require('../../../controllers/userController');

// /api/users GET all users and create new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId GET user by _id
router.route('/:userId').get(getUserById).put(updateUser);

module.exports = router;
