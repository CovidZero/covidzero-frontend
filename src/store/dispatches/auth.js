import * as actionTypes from '../actionTypes/auth';

export const userLoginRequest = () => ({
  type: actionTypes.USER_LOGIN_REQUEST,
});

export const userLoginSuccess = user => ({
  type: actionTypes.USER_LOGIN_SUCCESS,
  dispatch: { ...user },
});

export const userLoginError = error =>  ({
  type: actionTypes.USER_LOGIN_ERROR,
  dispatch: { error },
});

export const userSignupRequest = () => ({
  type: actionTypes.USER_SIGNUP_REQUEST,
});

export const userSignupSuccess = user => ({
  type: actionTypes.USER_SIGNUP_SUCCESS,
  dispatch: { ...user },
});

export const userSignupError = error => ({
  type: actionTypes.USER_SIGNUP_ERROR,
  dispatch: { error },
});

export const userLogout = () => ({
  type: actionTypes.USER_LOGOUT,
});
