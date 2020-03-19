import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';

import GuestRoute from './GuestRoute';
import UserRoute from './UserRoute';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import Unauthorized from '../pages/Unauthorized';

const Routes = props => (
  <Switch>
    <GuestRoute
      {...props}
      exact
      path='/'
      component={Login}
    />

    <UserRoute
      {...props}
      exact
      path='/dashboard'
      component={Dashboard}
    />

    <Route
      {...props}
      exact
      path='/unauthorized'
      component={Unauthorized}
    />

    <Route {...props} component={NotFound} />
  </Switch>
);

Routes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

export default Routes;
