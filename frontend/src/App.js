import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
	return (
		<div>
			<Switch>
				<Route component={Home} path={'/'} />
			</Switch>
		</div>
	);
}
