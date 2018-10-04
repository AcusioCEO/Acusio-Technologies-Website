import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import Forum from "./Forum";

const Routing = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/forum" component={Forum} />
    {/* <Route path="/projects" component={Projects} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} /> */}
  </Switch>
);
export default Routing;
