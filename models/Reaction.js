const mongoose = require('mongoose');
const { Schema } = mongoose;
const dayjs = require('dayjs');

const reactionSchema = new Schema(
	{
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
			get: (timestamp) =>
				dayjs(timestamp).format('MMM D, YYYY [at] HH:mm a'),
		},
	},
	{
		toJSON: {
			getters: true,
			virtuals: true,
		},
	}
);

module.exports = reactionSchema;
