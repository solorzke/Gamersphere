import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import Body from './Slide';
import './Banner.css';
import Gauntlet from '../../images/232.png';
import Sale from '../../images/323.png';

const Banner = () => {
	return (
		<div className="slide-container">
			<Slide arrows={false} indicators={true}>
				<Body
					title={'Check out our latest collection'}
					subtitle={'Featuring the most iconic artifacts'}
					link={'#'}
					image={Gauntlet}
				/>
				<Body
					title={'Check out our latest collection'}
					subtitle={'Featuring the most iconic artifacts'}
					link={'#'}
					image={Sale}
				/>
			</Slide>
		</div>
	);
};

export default Banner;
