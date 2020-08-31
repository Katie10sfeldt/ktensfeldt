import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';

export default function Routes() {
    return(
        <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/">
                <Redirect to="/Home" />
            </Route>
            <Route exact path="/About" component={About} />
        </Switch>
    );
}