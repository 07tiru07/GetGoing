import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MastHead from "./MastHead";
import Home from "./Home";
import Fitness from "./Fitness";
import Sports from "./Sports";
import Events from "./Events";

import "./App.css";

const App = () => {
  return(
  <>
  <Router>
    <header>
    <MastHead />
    </header>
    <main style={{height: '100%'}}>
        <Switch>
          <Route path="/fitness">
            <Fitness />
          </Route>
          <Route path="/sports">
            <Sports />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </main>
  </Router>
  </>
  )};

export default App;

