const { User, Event, Group } = require('../models');

module.exports = {
  // create new group
  async createGroup(req, res) {
    try {
      const createGroup = await Group.create({
        groupDescription: req.body.groupDescription,
        groupName: req.body.groupName,
        members: req.body.members,
        admin: req.body.admin,
        homeCourts: req.body.homeCourts,
        skillLevel: req.body.skillLevel
      });
      res.json(createGroup);
      console.log('Group successfully created!');
    } catch (err) {
      res.status(500).json(err);
    }
  },
    // update group
    async updateGroup(req, res) {
      try {
        const filter = { _id: req.params.groupId };
        const update = { $set: req.body };
        const updateGroup = await Group.findOneAndUpdate(
          filter,
          update,
          { new: true }
        )
          .populate('events')

        if (!updateGroup) {
          return res.status(404).json({ message: 'No group with that id' });
        }

        res.json(updateGroup);
        console.log('Group updated successfully!');
      } catch (err) {
        res.status(500).json(err)
      }
    },
    // delete group
    async deleteGroup(req, res) {
      try {
        const deleteGroup = await Group.findOneAndDelete({ _id: req.params.groupId });
        // remove group from User
        const deleteGroupFromUser = await User.find(
          { groups: req.params.groupId },
          { $pull: { group: req.params.groupId } },
        )
          .populate('groups')
          .populate('friends')

        if (!deleteGroup) {
          return res.status(404).json({ message: 'No group with that id' });
        }

        res.json(deleteGroup);
        console.log('Group deleted successfully!');
      } catch (err) {
        res.status(500).json(err);
      }
    },
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
    // get single event
    async getSingleEvent(req, res) {
      try {
        const event = await Event.findOne({ _id: req.params.eventId })
          .populate('comments');

        if (!event) {
          return res.status(404).json({ message: 'No event found with that ID' });
        }

        res.json(event);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // get all group members
    async getAllGroupMembers(req, res) {
      try {
        const users = await User.find()
          //.populate('thoughts')
          .populate('friends');
        res.json(users);
      } catch (err) {
        res.status(500).json(err);
      }
    },
    // get single group member
    async getSingleGroupMember(req, res) {
      try {
        const user = await User.findOne({ _id: req.params.userId })
          //.populate('thoughts')
          .populate('friends');

        if (!user) {
          return res.status(404).json({ message: 'No user found with that ID' });
        }

        res.json(user);
      } catch (err) {
        res.status(500).json(err);
      }
    },
// add group member
async addGroupMember(req, res) {
      try {
        const addGroupMember = await Group.findOneAndUpdate(
          { _id: req.params.groupId },
          { $addToSet: { members: req.params.userId } },
          { new: true },
        )
          .populate('members')
          .populate('events')

        if (!addGroupMember) {
          return res.status(404).json({ message: 'No group found with that ID' });
        }

        res.json(addGroupMember);
        console.log('Group member added successfully!');
      } catch (err) {
        res.status(500).json(err);
      }
    },
// remove group member
async removeGroupMember(req, res) {
      try {
        const removeGroupMember = await Group.findOneAndUpdate(
          { _id: req.params.groupId },
          { $pull: { members: req.params.userId } },
          { new: true },
        )
          .populate('members')
          .populate('events')

        if (!removeGroupMember) {
          return res.status(404).json({ message: 'No group found with that ID' });
        }

        res.json(removeGroupMember);
        console.log('Group member removed successfully!');
      } catch (err) {
        res.status(500).json(err);
      }
    },
// add group admin
async addGroupAdmin(req, res) {
      try {
        const addGroupAdmin = await Group.findOneAndUpdate(
          { _id: req.params.groupId },
          { $addToSet: { admin: req.params.userId } },
          { new: true },
        )
          .populate('admin')
          .populate('events')

        if (!addGroupAdmin) {
          return res.status(404).json({ message: 'No group found with that ID' });
        }

        res.json(addGroupAdmin);
        console.log('Group admin added successfully!');
      } catch (err) {
        res.status(500).json(err);
      }
    },
// remove group admin
async removeGroupAdmin(req, res) {
      try {
        const removeGroupAdmin = await Group.findOneAndUpdate(
          { _id: req.params.groupId },
          { $pull: { admin: req.params.userId } },
          { new: true },
        )
          .populate('admin')
          .populate('events')

        if (!removeGroupAdmin) {
          return res.status(404).json({ message: 'No group found with that ID' });
        }

        res.json(removeGroupAdmin);
        console.log('Group admin removed successfully!');
      } catch (err) {
        res.status(500).json(err);
      }
    },
// add event to group
async addEventToGroup(req, res) {
      try {
        const addEventToGroup = await Group.findOneAndUpdate(
          { _id: req.params.groupId },
          { $addToSet: { events: req.params.eventId } },
          { new: true },
        )
          .populate('events')

        if (!addEventToGroup) {
          return res.status(404).json({ message: 'No group found with that ID' });
        }

        res.json(addEventToGroup);
        console.log('Event added to group successfully!');
      } catch (err) {
        res.status(500).json(err);
      }
    },
// remove event from group
async removeEventFromGroup(req, res) {
      try {
        const removeEventFromGroup = await Group.findOneAndUpdate(
          { _id: req.params.groupId },
          { $pull: { events: req.params.eventId } },
          { new: true },
        )
          .populate('events')
        
        if (!removeEventFromGroup) {
          return res.status(404).json({ message: 'No group found with that ID' });
        }

        res.json(removeEventFromGroup);
        console.log('Event removed from group successfully!');
      } catch (err) {
        res.status(500).json(err);
      }
    },
// get all groups
async getAllGroups(req, res) {
      try {
        const groups = await Group.find()
          .populate('members')
          .populate('events')
        res.json(groups);
      } catch (err) {
        res.status(500).json(err);
      }
    },
// get single group
async getSingleGroup(req, res) {
      try {
        const group = await Group.findOne({ _id: req.params.groupId })
          .populate('members')
          .populate('events')

        if (!group) {
          return res.status(404).json({ message: 'No group found with that ID' });
        }

        res.json(group);
      } catch (err) {
        res.status(500).json(err);
      }
    },
  };