import React, { useState, useEffect } from 'react';
import jsonData from './utils/meals.json';
import { IoMdBicycle } from 'react-icons/io';

function Specials() {
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		setMeals(jsonData.meals);
	}, []);

	return (
		<div id="specials">
			<h1>This Week's Specials</h1>
			<div className="specials-container">
				{meals.map((meal) => (
					<div key={meal.idMeal} className='specials-card'>
						<div className="dish-image">
							<img src={meal.img} alt={meal.dish} />
						</div>
						<div className="dish-name">
							<h2>{meal.dish}</h2>
							<p>{meal.price}</p>
						</div>
						<div className="dish-description">
							<p>{meal.description}</p>
						</div>
						<div className="delivery">
							<p>Order for delivery <IoMdBicycle /></p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Specials;

