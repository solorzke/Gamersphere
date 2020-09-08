import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

const Item = ({ name, icon }) => {
	return (
		<Link to={'#'}>
			<img src={icon} className="category-icon" />
			<p>{name}</p>
		</Link>
	);
};

export default Item;
