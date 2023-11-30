const { Schema, model } = require("mongoose");
const eventSchema = require("./Event");

const groupSchema = new Schema(
  {
    groupDescription: {
      type: String,
      required: true,
      min: 1,
      max: [280, "Uh-oh, too many characters!"],
    },
    groupName: {
      type: String,
      required: true,
    },
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
    ],
    admin: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
    ],
    events: [eventSchema],
    homeCourts: {
      type: String,
      required: true,
    },
    skillLevel: {
      type: String,
      required: false,
    }
  },
  {
		toJSON: {
			virtuals: true,
			getters: true,
		},
		id: false,
	}
);

// initialize our Event model
const Group = model("group", groupSchema);

module.exports = Group;