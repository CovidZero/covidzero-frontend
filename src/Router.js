import React from "react";
import { Route, Switch } from "react-router-dom";
import TestReduxSaga from "./pages/TestReduxSaga";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={TestReduxSaga} />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
