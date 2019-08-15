import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login, Dashboard } from "./containers";
export default () => (
  <Switch>
    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />;
    <Route
      exact
      path={`${process.env.PUBLIC_URL}/dashboard`}
      component={Dashboard}
    />
  </Switch>
);
