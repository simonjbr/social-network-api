const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Thought = require('./Thought');

// schema to create User model
const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		required: true,
		maxLength: 10,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	},
	thoughts: [
		{
			type: mongoose.Types.ObjectId,
			ref: 'Thought',
		},
	],
	friends: [
		{
			type: mongoose.Types.ObjectId,
			ref: 'User',
		},
	],
});

// virtual to return the length of friends array
userSchema.virtual('friendCount').get(function () {
	return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;
