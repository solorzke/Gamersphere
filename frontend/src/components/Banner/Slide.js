import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Banner.css';

const SlideComponent = ({ title, subtitle, link, image }) => {
	return (
		<div className="each-slide">
			<div style={{ backgroundImage: `url(${image})` }}>
				<Jumbotron bsPrefix={'jumbotron banner-bg'}>
					<h1>{title}</h1>
					<p>{subtitle}</p>
					<p>
						<Button href={link} variant="primary">
							Learn more
						</Button>
					</p>
				</Jumbotron>
			</div>
		</div>
	);
};

export default SlideComponent;
