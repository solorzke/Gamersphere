import React, { Component } from 'react';
import './Banner.css';
import Slideshow from './Slideshow';

export default class Banner extends Component {
	render() {
		return (
			<div className="scontainer">
				<div className="banner-body">
					<Slideshow
						title={'Check out our latest collection'}
						subtitle={'Featuring the most iconic artifacts'}
					/>
				</div>
			</div>
		);
	}
}
