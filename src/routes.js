import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Show from './pages/show';
import Users from './pages/users'


const Routes = () => (
    <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Users} />
                    <Route exact path="/Show/:id" component={Show} />
                </Switch>
    </BrowserRouter>
);

export default Routes;