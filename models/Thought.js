const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const reactionSchema = require('./Reaction');

const dayjs = require('dayjs');

// schema to create Thought model
const thoughtSchema = new Schema({
	thoughtText: {
		type: String,
		required: true,
		minLength: 1,
		maxLength: 280,
	},
	createdAt: {
		type: Date,
		default: () => dayjs(),
	},
	username: {
		type: String,
		required: true,
	},
	reactions: [reactionSchema],
});

// getter for formatted createdAt timestamp
thoughtSchema.methods.getCreatedAt = function () {
	return this.createdAt.format('DD/MM/YYYY');
};

// virtual to retrieve the length of reactions array
thoughtSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
