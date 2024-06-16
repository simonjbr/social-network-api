const router = require('express').Router();
const {
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	addFriend,
} = require('../../../controllers/userController');

// /api/users GET all users and create new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId GET user by _id, update user and delete user
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId add new friend
router.route('/:userId/friends/:friendId').put(addFriend);

module.exports = router;
