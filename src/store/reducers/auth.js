import { combineReducers } from 'redux';
import * as actionTypes from '../actionTypes/auth';

export const defaultStates = {
  loggedUser: {
    id: '',
    name: '',
    email: '',
  },
  requestToken: '',
  error: null,
  loading: false,
};

export const loggedUser = (state = defaultStates.loggedUser, { type, dispatch }) => {
  switch (type) {
  case actionTypes.USER_LOGIN_REQUEST:
  case actionTypes.USER_SIGNUP_REQUEST:
  case actionTypes.USER_LOGIN_ERROR:
  case actionTypes.USER_SIGNUP_ERROR:
    return state;
  case actionTypes.USER_LOGIN_SUCCESS:
  case actionTypes.USER_SIGNUP_SUCCESS:
    return dispatch.user;
  case actionTypes.USER_LOGOUT:
    return defaultStates.loggedUser;
  default:
    return state;
  }
};

export const requestToken = (state = defaultStates.requestToken, { type, dispatch }) => {
  switch (type) {
  case actionTypes.USER_LOGIN_SUCCESS:
    return dispatch.access_token;
  case actionTypes.USER_LOGOUT:
    return defaultStates.requestToken;
  default:
    return state;
  }
};

export const loading = (state = defaultStates.loading, { type }) => {
  switch (type) {
  case actionTypes.USER_LOGIN_REQUEST:
  case actionTypes.USER_SIGNUP_REQUEST:
    return true;
  case actionTypes.USER_LOGIN_SUCCESS:
  case actionTypes.USER_SIGNUP_SUCCESS:
  case actionTypes.USER_LOGIN_ERROR:
  case actionTypes.USER_SIGNUP_ERROR:
    return false;
  case actionTypes.USER_LOGOUT:
    return defaultStates.loading;
  default:
    return state;
  }
};

export const error = (state = defaultStates.error, { type, dispatch }) => {
  switch (type) {
  case actionTypes.USER_LOGIN_REQUEST:
  case actionTypes.USER_SIGNUP_REQUEST:
    return null;
  case actionTypes.USER_LOGIN_ERROR:
  case actionTypes.USER_SIGNUP_ERROR:
    return dispatch.error;
  case actionTypes.USER_LOGOUT:
    return defaultStates.error;
  default:
    return state;
  }
};

export default combineReducers({
  loggedUser,
  requestToken,
  loading,
  error,
});
