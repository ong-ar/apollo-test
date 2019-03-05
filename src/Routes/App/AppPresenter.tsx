import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HOME from "../Home";

const AppPresenter: React.SFC = () => (
  <Router>
    <Routes />
  </Router>
);

const Routes: React.SFC = () => (
  <Switch>
    <Route path="/" exact={true} component={HOME} />
  </Switch>
);

export default AppPresenter;
