import React from 'react';
import './Categories.css';
import { Container, Row, Col } from 'react-bootstrap';
import Item from './Item';
import Shield from '../../images/shield.png';
import Sales from '../../images/sales.png';
import UpcomingProducts from '../../images/date.png';
import News from '../../images/news.png';

const Categories = () => {
	return (
		<Container bsPrefix={'container categories'}>
			<h4>Browse Most Popular Categories</h4>
			<Row>
				<Col>
					<Item icon={Shield} name={'Heroes'} />
				</Col>
				<Col>
					<Item icon={Sales} name={'Sales'} />
				</Col>
				<Col>
					<Item icon={UpcomingProducts} name={'Heroes'} />
				</Col>
				<Col>
					<Item icon={News} name={'Blog'} />
				</Col>
			</Row>
		</Container>
	);
};

export default Categories;
