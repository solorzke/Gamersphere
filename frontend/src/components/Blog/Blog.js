import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Post from './Post';
import './Blog.css';
import Blog1 from '../../images/blog1.jpg';
import Blog2 from '../../images/comic.jpg';
import Blog3 from '../../images/design.jpg';

const Blog = () => {
	return (
		<Container>
			<h3 className="text-center">Blog</h3>
			<Row style={{ paddingTop: 10 }}>
				<Post
					image={Blog1}
					title={'Customize Mjolnir'}
					description={'Discover different ways to customize Mjolnir.'}
				/>
				<Post
					image={Blog2}
					title={'Customize Mjolnir'}
					description={'Discover different ways to customize Mjolnir.'}
				/>
				<Post
					image={Blog3}
					title={'Customize Mjolnir'}
					description={'Discover different ways to customize Mjolnir.'}
				/>
			</Row>
			<Row style={{ paddingTop: 10 }}>
				<Post
					image={Blog1}
					title={'Customize Mjolnir'}
					description={'Discover different ways to customize Mjolnir.'}
				/>
				<Post
					image={Blog2}
					title={'Customize Mjolnir'}
					description={'Discover different ways to customize Mjolnir.'}
				/>
				<Post
					image={Blog3}
					title={'Customize Mjolnir'}
					description={'Discover different ways to customize Mjolnir.'}
				/>
			</Row>
			<Link to="#" className="text-right">
				<p>Read more</p>
			</Link>
		</Container>
	);
};

export default Blog;
