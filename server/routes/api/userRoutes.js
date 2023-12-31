const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    loginUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
    // joinGroup,
    // leaveGroup,
    joinEvent,
    leaveEvent
} = require('../../controllers/userControllers');

const { authMiddleware } = require('../../utils/auth');

// routes for /api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// routes for /api/users/login
router.route('/login').post(loginUser);

// routes for api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// routes for api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

// routes for api/users/:userId/events/:eventId
router.route('/:userId/events/:eventId')
    .post(joinEvent)
    .delete(leaveEvent);

module.exports = router;