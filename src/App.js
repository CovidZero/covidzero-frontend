import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import Routes from './routes';

const history = createBrowserHistory();

const App = ({ isAuthenticated }) => (
  <Router history={history}>
    <Routes history={history} isAuthenticated={isAuthenticated} />
  </Router>
);

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: Boolean(state.auth.requestToken),
});

export default connect(mapStateToProps, { })(App);
