const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const reactionSchema = require('./Reaction');

const dayjs = require('dayjs');

// schema to create Thought model
const thoughtSchema = new Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			minLength: 1,
			maxLength: 280,
		},
		createdAt: {
			type: Date,
			default: () => dayjs(),
			get: (timestamp) =>
				dayjs(timestamp).format('MMM D, YYYY [at] HH:mm a'),
		},
		username: {
			type: String,
			required: true,
		},
		reactions: [reactionSchema],
	},
	{
		toJSON: {
			getters: true,
			virtuals: true,
		},
		// stop default id getter from duplicating _id field
		id: false,
	}
);

// virtual to retrieve the length of reactions array
thoughtSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
