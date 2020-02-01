import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './login';
import Registration from './registration';
import UserDetails from './userdetails';
import PortFolio from './portfolio';
import PageNotFound from './pagenotfound';
import Header from './headermapping';

const RouteMapping = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Login} exact={true} />
                {/* <Route path="/login" component={Login} /> */}
                <Route path="/register" component={Registration} />
                <Route path="/userdetails/:id" component={UserDetails} />
                <Route path="/portfolio" component={PortFolio} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)
export default RouteMapping