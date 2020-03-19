import authService from '../../services/auth';
import * as dispatches from '../dispatches/auth';

export const login = credentials => (
  dispatch => {
    dispatch(dispatches.userLoginRequest());
    return authService.login(credentials).then(res =>
      dispatch(dispatches.userLoginSuccess(res.data))
    ).catch(error => {
      const errorData = error.response ? error.response.data : error;
      dispatch(dispatches.userLoginError(errorData));
    });
  }
);

export const logout = () => (
  dispatch => dispatch(dispatches.userLogout())
);

export const signup = credentials => (
  dispatch => {
    dispatch(dispatches.userSignupRequest());
    return authService.signup(credentials).then(res => {
      dispatch(dispatches.userSignupSuccess(res.data));
    }).catch(error => {
      const errorData = error.response ? error.response.data : error;
      dispatch(dispatches.userSignupError(errorData));
    });
  }
);
