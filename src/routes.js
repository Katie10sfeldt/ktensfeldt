import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function Routes() {
	return (
		<Switch>
			<Route exact path='/Home' component={Home} />
			<Route exact path='/'>
				<Redirect to='/Home' />
			</Route>
			<Route exact path='/About' component={About} />
			<Route exact path='/Portfolio' component={Portfolio} />
			<Route exact path='/Contact' component={Contact} />
		</Switch>
	);
}
