import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Blog.css';
const Post = ({ image, title, description }) => {
	return (
		<Col bsPrefix="col-md-4 d-flex align-items-center justify-content-center">
			<Link to={'#'}>
				<Card style={{ width: '17rem', marginBottom: 20 }}>
					<Card.Img variant="top" src={image} />
					<Card.Body>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{description}</Card.Text>
						<Button variant="primary">Read more</Button>
					</Card.Body>
				</Card>
			</Link>
		</Col>
	);
};

export default Post;
