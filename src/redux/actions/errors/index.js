// eslint-disable-next-line
import { SET_LOGIN_ERRORS, SET_REG_ERRORS, CLEAR_ALL_ERRORS } from '../types';

export const setError = (error) => (dispatch) => {
  return dispatch({ type: SET_LOGIN_ERRORS, payload: error });
};

export const setRegistrationError = (error) => (dispatch) => {
  return dispatch({ type: SET_REG_ERRORS, payload: error });
};

export const setLoginError = (error) => (dispatch) => {
  return dispatch({ type: SET_LOGIN_ERRORS, payload: error });
};

export const clearErrors = () => (dispatch) => {
  return dispatch({ type: CLEAR_ALL_ERRORS });
};
