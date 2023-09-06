import React, { useState, useEffect } from 'react';
import reviewsData from './utils/reviews.json';

const ReviewCard = () => {
	const [starString, setStarString] = useState('');


// reviews are generated randomly
	const [randomReview, setRandomReview] = useState([]);

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * reviewsData.reviews.length);
		const selectedReview = reviewsData.reviews[randomIndex];
		setRandomReview(selectedReview);
	}, []);

	// number of the stars is generated randomly, random number between 3 and 5
	useEffect(() => {

		const minStars = 3;
		const maxStars = 5;
		const numStars = Math.floor(Math.random() * (maxStars - minStars + 1)) + minStars;

		const stars = '⭐️'.repeat(numStars);

		setStarString(stars);
	}, []);

	const [user, setUser] = useState([]);

	// user names and photos are generated randomly via randomuser-API
	const fetchData = () => {
		fetch('https://randomuser.me/api/')
			.then(res => res.json())
			.then(data => setUser(data))
	};

	useEffect(() => {
		fetchData();
	}, []);

	return Object.keys(user).length > 0 ? (
		<div className="card-container">
			<span className="stars" role="img" aria-label="emoji">
				{starString}
			</span>
			<div className="avatar">
				<img src={user.results[0].picture.medium} alt="portrait" />
			</div>
			<div className="reviewer-name">
				<h3> {user.results[0].name.first} </h3>
			</div>

			<div className="review">
				{randomReview ? randomReview.review : 'Fetching customer reviews...'}
			</div>
		</div>
	) : (
		<p>Fetching customer reviews...</p>
	);
};

export default ReviewCard;