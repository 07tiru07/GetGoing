import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import MastHead from "./MastHead";
import Home from "./Home";
import Fitness from "./Fitness";
import Sports from "./Sports";
import Events from "./Events"
import Lessons from "./Lessons";
import Register from "./Register";
import Login from "./Login";
import MJE from "./MJE";
import PastE from "./PastE";
import UpcomingE from "./UpcomingE";

import "./App.css";

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
            <Route path="/MJE">
                <MJE/>
            </Route>
            <Route path="/UpcomingE">
                <UpcomingE/>
                </Route>
                <Route path="/PastE">
                    <PastE/>
                </Route>
            <Route path="/">
                <Home/>
            </Route>
        </Switch>
    </Router>)
};

export default App;
