import React from 'react';
import { Jumbotron, Button, Container } from 'react-bootstrap';

const Jumbo = ({ title, description }) => {
	return (
		<Container bsPrefix="container my-5">
			<Jumbotron>
				<h1>{title}</h1>
				<p>{description}</p>
				<p>
					<Button variant="primary">Learn more</Button>
				</p>
			</Jumbotron>
		</Container>
	);
};

export default Jumbo;
