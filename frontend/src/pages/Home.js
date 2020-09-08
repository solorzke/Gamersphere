import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/Banner/Banner';
import Categories from '../components/Categories/Categories';
import Blog from '../components/Blog/Blog';
import Footer from '../components/Footer/Footer';
import Jumbotron from '../components/Jumbotron/Jumbotron';

class Home extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Banner />
				<Categories />
				<Blog />
				<Jumbotron
					title="Learn More About Marvelcons"
					description="Discover how Marvelcons was started and what the future holds for us"
				/>
				<Footer />
			</div>
		);
	}
}

export default Home;
