import React, { useEffect } from 'react';
import Auth from '../utils/auth';

const Dashboard = () => {
  useEffect(() => {
    // Fetch user's groups
    const fetchGroups = async () => {
      try {
        const response = await fetch('/api/users/:userId/groups', {
          headers: {
            Authorization: `Bearer ${Auth.getToken()}`,
          },
        });

        if (!response.ok) {
          throw new Error('Unable to fetch groups.');
        }

        const groups = await response.json();
        console.log('User groups:', groups);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch upcoming events
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/users/:userId/events', {
          headers: {
            Authorization: `Bearer ${Auth.getToken()}`,
          },
        });

        if (!response.ok) {
          throw new Error('Unable to fetch events.');
        }

        const events = await response.json();
        console.log('Upcoming events:', events);
      } catch (error) {
        console.error(error);
      }
    };

    // Fetch user's friends list
    const fetchFriends = async () => {
      try {
        const response = await fetch('/api/friends', {
          headers: {
            Authorization: `Bearer ${Auth.getToken()}`,
          },
        });

        if (!response.ok) {
          throw new Error('Unable to fetch friends.');
        }

        const friends = await response.json();
        console.log('User friends:', friends);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGroups();
    fetchEvents();
    fetchFriends();
  }, []);

  return (
    <div>
      {/* Render user's groups */}
      <h2>My Groups</h2>
      {/* Render upcoming events */}
      <h2>Upcoming Events</h2>
      {/* Render friends list */}
      <h2>Friends List</h2>
    </div>
  );
};

export default Dashboard;
