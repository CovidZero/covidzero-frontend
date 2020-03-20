import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TestReducer from './pages/TestReducer';
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={TestReducer} />
      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}