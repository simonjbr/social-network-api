const { Schema, model } = require('mongoose');
const userSchema = require('./User');
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
		default: () => Date.now(),
	},
	username: {
		type: String,
		required: true,
	},
	reactions: [reactionSchema],
});

// getter for formatted createdAt timestamp
thoughtSchema.methods.getCreatedAt = function () {
	return dayjs(this.createdAt).format('DD/MM/YYYY');
};

// virtual to retrieve the length of reactions array
thoughtSchema.virtual('reactionCount').get(function () {
	return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
