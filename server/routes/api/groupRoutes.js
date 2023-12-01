const router = require("express").Router();

const {
	createGroup,
	updateGroup,
	deleteGroup,
  getAllEvents,
  getSingleEvent,
  getAllGroupMembers,
  getSingleGroupMember,
  addGroupMember,
  removeGroupMember,
  addGroupAdmin,
  removeGroupAdmin,
  addEventToGroup,
  removeEventFromGroup,
  getAllGroups,
  getSingleGroup,
} = require("../../controllers/groupControllers");

// routes for /api/groups
router.route("/")
  .get(getAllGroups)
  .post(createGroup);

// routes for /api/groups/:groupId
router
	.route("/:groupId")
	.get(getSingleGroup)
	.put(updateGroup)
	.delete(deleteGroup);

// route for /api/groups/:groupId/events/:eventId
router.route("/:groupId/events/:eventId")
  .get(getAllEvents)
  .get(getSingleEvent)
  .post(addEventToGroup)
  .delete(removeEventFromGroup);

// route for /api/groups/:groupId/users/:userId
router.route("/:groupId/users/:userId")
  .get(getAllGroupMembers)
  .get(getSingleGroupMember)
  .post(addGroupMember)
  .delete(removeGroupMember)
  .post(addGroupAdmin)
  .delete(removeGroupAdmin);

module.exports = router;
