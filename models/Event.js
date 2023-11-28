const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const { format_date } = require('../utils/helpers');

// Schema to create Event model
const eventSchema = new Schema (
    {
        eventText: {
            type: String,
            required: true,
            min: 1,
            max: [280, 'Uh-oh, too many characters!'],
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAt => format_date (createdAt)
        },
        username: {
            type: String,
            required: true
        },
        comments: [commentSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// virtual property 'commentCount' that gets the amount of comments per event
eventSchema
    .virtual('commentCount')
    .get(function () {
        return this.comments.length;
    });

// initialize our Thought model
const Event = model('event', eventSchema);

module.exports = Event;