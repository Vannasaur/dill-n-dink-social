import React, { useEffect, useState } from 'react';
import style from './Dashboard.module.css';
import logo from '../../assets/images/logo.svg';

const Dashboard = () => {
	const [events, setEvents] = useState([]);
	const [groups, setGroups] = useState([]);
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		// Fetch user's events
		// Replace 'fetchUserEvents' with the actual API call to fetch the user's events
		const fetchUserEvents = async () => {
			try {
				const response = await fetch('/api/users/:userId/events');
				const data = await response.json();
				setEvents(data);
			} catch (error) {
				console.error('Error fetching user events:', error);
			}
		};

		// Fetch user's groups
		// Replace 'fetchUserGroups' with the actual API call to fetch the user's groups
		const fetchUserGroups = async () => {
			try {
				const response = await fetch('/api/users/:userId/groups');
				const data = await response.json();
				setGroups(data);
			} catch (error) {
				console.error('Error fetching user groups:', error);
			}
		};

		// Fetch user's friends
		// Replace 'fetchUserFriends' with the actual API call to fetch the user's friends
		const fetchUserFriends = async () => {
			try {
				const response = await fetch('/api/users/:userId/friends');
				const data = await response.json();
				setFriends(data);
			} catch (error) {
				console.error('Error fetching user friends:', error);
			}
		};

		fetchUserEvents();
		fetchUserGroups();
		fetchUserFriends();
	}, []);

	return (
		<div className={style.dashboardMain}>
			<img src={logo} alt="logo" />
			<section className={style.dashboardEvents}>
				{/* Render upcoming events */}
				<h2>Upcoming Events</h2>
				{/* Render events */}
				{events.length === 0 ? (
					<p>No upcoming events</p>
				) : (
					events.map((event) => <div key={event.id}>{event.name}</div>)
				)}
			</section>
			<div className={style.dashboardBottomSection}>
				<section className={style.dashboardGroups}>
					{/* Render user's groups */}
					<h2>My Groups</h2>
					{/* Render groups */}
					{groups.length === 0 ? (
						<p>No groups yet</p>
					) : (
						groups.map((group) => <div key={group.id}>{group.name}</div>)
					)}
				</section>
				<section className={style.dashboardFriends}>
					{/* Render friends list */}
					<h2>Friends List</h2>
					{/* Render friends */}
					{friends.length === 0 ? (
						<p>No friends yet</p>
					) : (
						friends.map((friend) => <div key={friend.id}>{friend.name}</div>)
					)}
				</section>
			</div>
		</div>
	);
};

export default Dashboard;
