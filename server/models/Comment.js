const { Schema, Types } = require("mongoose");
const { format_date } = require("../utils/helpers");

// Schema for reaction (subdocument to Thought model)
const commentSchema = new Schema(
	{
		commentId: {
			type: Schema.Types.ObjectId,
			default: () => new Types.ObjectId(),
		},
		commentBody: {
			type: String,
			required: true,
			max: [280, "Uh-oh, too many characters!"],
		},
		username: {
			type: String,
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (createdAt) => format_date(createdAt),
		},
	},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
);

module.exports = commentSchema;
