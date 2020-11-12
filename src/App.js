import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";

import MastHead from "./MastHead";
import Home from "./Home";
import Fitness from "./Fitness";
import Sports from "./Sports";

import "./App.css";

const App = () => (
  <MemoryRouter>
    <MastHead />
    <Switch>
      <Route path="/fitness">
        <Fitness />
      </Route>
      <Route path="/sports">
        <Sports />
      </Route>
      <Route path="/" exact={true}>
        <Home />
      </Route>
    </Switch>
  </MemoryRouter>
);

export default App;
