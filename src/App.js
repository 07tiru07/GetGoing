import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import MastHead from "./MastHead";
import Home from "./Home";
import Fitness from "./Fitness";
import Sports from "./Sports";
import Events from "./Events"
import Lessons from "./Lessons";
import Register from "./Register";
import Login from "./Login";
import Coupons from "./Coupons";

import "./App.css";
import JoinedEvents from "./JoinedEvents";
import CreatedEvents from "./CreatedEvents";
import Rewards from "./Rewards";
import SportProducts from "./SportProducts";

const App = () => {
    return (
        <Router>
            <MastHead/>
            <Switch>
                <Route path="/fitness">
                    <Fitness/>
                </Route>
                <Route path="/events">
                    <Events/>
                </Route>
                <Route path="/lessons">
                    <Lessons/>
                </Route>
                <Route path="/sports">
                    <Sports/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/rewards">
                    <Rewards/>
                </Route>
                <Route path="/created_events">
                    <CreatedEvents/>
                </Route>
                <Route path="/joined_events">
                    <JoinedEvents/>
                </Route>
                <Route path="/sports_products">
                    <SportProducts/>
                </Route>
                <Route path="/coupons">
                    <Coupons/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>)
};

export default App;
