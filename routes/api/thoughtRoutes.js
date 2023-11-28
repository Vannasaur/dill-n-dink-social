const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    removeReaction,
} = require('../../controllers/thoughtControllers');

// routes for /api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(createThought);

// routes for /api/thoughts/:thoughtId
router.route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// route for /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(createReaction)

// route for /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction);

module.exports = router;