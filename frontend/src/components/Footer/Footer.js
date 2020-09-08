import React, { Component } from 'react';
import './Footer.css';
import Navigation from './Navigation';
import Copyright from './Copyright';

export default class Footer extends Component {
	render() {
		return (
			<div className="footer-container">
				<Navigation />
				<Copyright year={new Date().getFullYear()} />
			</div>
		);
	}
}
