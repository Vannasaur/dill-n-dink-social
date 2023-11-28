const router = require('express').Router();
const {
    getAllEvents,
    getSingleEvent,
    createEvent,
    updateEvent,
    deleteEvent,
    createComment,
    removeComment,
} = require('../../controllers/eventControllers');

// routes for /api/events
router.route('/')
    .get(getAllEvents)
    .post(createEvent);

// routes for /api/events/:eventId
router.route('/:eventId')
    .get(getSingleEvent)
    .put(updateEvent)
    .delete(deleteEvent);

// route for /api/events/:eventId/comments
router.route('/:eventId/comments')
    .post(createComment)

// route for /api/events/:eventId/comments/:commentId
router.route('/:eventId/comments/:commentId')
    .delete(removeComment);

module.exports = router;