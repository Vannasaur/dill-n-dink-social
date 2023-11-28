const router = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
    joinGroup,
    leaveGroup,
    joinEvent,
    leaveEvent
} = require('../../controllers/userControllers');

// routes for /api/users
router.route('/')
    .get(getAllUsers)
    .post(createUser);

// routes for api/users/:userId
router.route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser);

// routes for api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

module.exports = router;