const mongoose = require('mongoose');
const { Schema } = mongoose;
const dayjs = require('dayjs');

const reactionSchema = new Schema({
	reactionId: {
		type: mongoose.Types.ObjectId,
		defualt: new mongoose.Types.ObjectId(),
	},
	reactionBody: {
		type: String,
		required: true,
		maxLength: 280,
	},
	username: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: () => dayjs(),
	},
});

// getter for formatted createdAt timestamp
reactionSchema.methods.getCreatedAt = function () {
	return this.createdAt.format('DD/MM/YYYY');
};

module.exports = reactionSchema;
