import React from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./containers";
export default () => (
  <Switch>
    <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />;
  </Switch>
);
