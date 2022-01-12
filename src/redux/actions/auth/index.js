import useRouter from 'next/router';
import parseJwt from 'helpers/parseJwt';
import { loginApi, refreshApi, registerApi } from 'services/auth.service';
import { userApi } from 'services/user.service';
import { closeLeftSidebar, closeRightSidebar } from '../sidebar';
import { setRegistrationError, setLoginError } from '../errors';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  SET_TOKENS,
  SET_ACCESS_TOKEN,
  SET_REFRESH_TOKEN,
} from 'redux/actions/types';
import localTokenService from 'services/localToken.service';

export const registerUser =
  (domain, first_name, last_name, email, password) => (dispatch) => {
    return registerApi({ domain, first_name, last_name, email, password })
      .then((token) => {
        dispatch({ type: LOGIN_SUCCESS, payload: token.data });

        dispatch({
          type: USER_LOADED,
          email: parseJwt(token.data.access_token).user.id,
        });
      })
      .catch((error) => {
        if (error.response.data.msg !== undefined) {
          dispatch(setRegistrationError(error.response.data.msg));
        } else dispatch(setRegistrationError(error));
      });
  };

export const loadUser = (access_token, refresh_token) => async (dispatch) => {
  dispatch({ type: USER_LOADING });

  await userApi(access_token)
    .then((response) => {
      dispatch({ type: USER_LOADED, email: response.data.msg.user.id });
      return response.data.msg.user.id;
    })
    .catch((error) => {
      dispatch({ type: LOGOUT_SUCCESS, payload: error });
    });
};

export const loginUser = (domain, email, password) => (dispatch) => {
  return loginApi(domain, email, password)
    .then((response) => {
      const access_token = response['x-access-token'];
      const refresh_token = response['x-refresh-token'];

      dispatch({ type: LOGIN_SUCCESS });
      dispatch({ type: SET_TOKENS, payload: { access_token, refresh_token } });
      dispatch(loadUser(access_token));
    })
    .catch((error) => {
      // if (error.message === 'Request failed with status code 400') {
      dispatch(setLoginError('Login Failure'));
      // }
    });
};

export const logoutUser = () => (dispatch) => {
  const router = useRouter();
  dispatch(closeLeftSidebar());
  dispatch(closeRightSidebar());
  router.push('/login');
  return dispatch({ type: LOGOUT_SUCCESS });
};

export const validateToken =
  ({ access_token }) =>
  () => {
    let parsedToken = parseJwt(access_token);

    return parsedToken;
  };

export const updateToken =
  (access_token, refresh_token) => async (dispatch) => {
    try {
      refreshApi(access_token, refresh_token).then((response) => {
        dispatch(setTokens(response.data));
      });
    } catch (error) {
      dispatch(
        setLoginError('Error updating tokens returning to login screen...')
      );
    }
  };

export const setTokens = (access_token, refresh_token) => (dispatch) => {
  localTokenService.setLocalAccessToken(access_token);
  return dispatch({
    type: SET_TOKENS,
    payload: { access_token, refresh_token },
  });
};

export const setAccessToken = (access_token) => (dispatch) => {
  return dispatch({ type: SET_ACCESS_TOKEN, payload: access_token });
};

export const setRefreshTokens = (refresh_token) => (dispatch) => {
  return dispatch({ type: SET_REFRESH_TOKEN, payload: refresh_token });
};
