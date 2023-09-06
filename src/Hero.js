import React, { useRef } from 'react';

const Hero = ({ scrollToRef }) => {

	const scrollToBooking = () => {
		if (scrollToRef.current) {
			scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div id="hero">
			<div className="hero-content">
				<div className="hero-text">
					<h1 className="restaurant-name">Little Lemon</h1>
					<h2 className="subtitle">Chicago</h2>
					<p className="description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
					<input type="button" aria-label="Reserve" value="Reserve Table" onClick={scrollToBooking} />
				</div>
				<div className="hero-img">
					<img src='images/main.jpg' alt="Image of a hand holding a dish" />
				</div>
			</div>
		</div>
	);
}

export default Hero;