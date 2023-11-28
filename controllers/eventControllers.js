const { Event, User } = require('../models');

module.exports = {
    // get all events
    async getAllEvents(req, res) {
        try {
            const events = await Event.find()
                .populate('comments');
            res.json(events);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get one event
    async getSingleEvent(req, res) {
        try {
            const event = await Event.findOne({ _id: req.params.eventId })
                .populate('comments');

            if (!event) {
                return res.status(404).json({ message: 'No event with that ID' });
            }

            res.json(event);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create event
    async createEvent(req, res) {
        try {
            const createEvent = await Event.create(req.body);
            const addEventToUser = await User.findOneAndUpdate(
                { username: req.body.username },
                { $addToSet: { events: createEvent._id } },
                { new: true },
            )
                .populate('events')
                .populate('friends')

            if (!addEventToUser) {
                return res.status(400).json({ message: 'Could not add event to user' })
            }
            res.json(addEventToUser);
            console.log('Event created successfully!')
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // update Event
    async updateEvent(req, res) {
        try {
            const filter = { _id: req.params.eventId };
            const update = { $set: req.body };

            const updateEvent = await Event.findOneAndUpdate(
                filter,
                update,
                { new: true }
            )
                .populate('comments')

            if (!updateEvent) {
                return res.status(404).json({ message: 'No event with that id' });
            }

            res.json(updateEvent);
            console.log('Event updated successfully!');
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // delete event
    async deleteEvent(req, res) {
        try {
            const deleteEvent = await Event.findOneAndDelete({ _id: req.params.eventId });
            // remove event from User
            const deleteEventFromUser = await User.findOneAndUpdate(
                { events: req.params.eventId },
                { $pull: { events: req.params.eventId } },
                { new: true }
            )
                .populate('events')
                .populate('friends')

            if (!deleteEvent) {
                return res.status(404).json({ message: 'No event with that id' });
            }

            res.json(deleteEvent);
            console.log('Event deleted successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create comment
    async createComment(req, res) {
        try {
            const filter = { _id: req.params.eventId };
            const update = { $push: { comments: req.body } };

            const createComment = await Event.findOneAndUpdate(
                filter,
                update,
                { runValidators: true, new: true }
            );

            if (!createComment) {
                return res.status(400).json({ message: 'Comment unable to be created' });
            }

            res.json(createComment);
            console.log('Comment created successfully!');
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // remove comment
    async removeComment(req, res) {
        try {
            const filter = { _id: req.params.eventId };
            const update = { $pull: { comments: { commentId: req.params.commentId } } };

            const removeComment = await Event.findOneAndUpdate(
                filter,
                update,
                { new: true }
            );

            if (!removeComment) {
                return res.status(404).json({ message: 'No comment with that ID' });
            }

            res.json(removeComment);
            console.log('Comment removed successfully!');
        } catch (err) {
            res.status(500).json(err)
        }
    }
};