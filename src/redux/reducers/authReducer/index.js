import localTokenService from 'services/localToken.service';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  USER_LOADING,
  USER_LOADED,
  SET_TOKENS,
  SET_ACCESS_TOKEN,
  SET_REFRESH_TOKEN,
  UPDATE_TOKENS,
} from 'redux/actions/types';

// set what the initial state should look like
const initialState = {
  isFetching: false,
  isAuthenticated: false,
  tokens: { access_token: null, refresh_token: null },
  email: null,
};

// auth reducer in charge of changing redux state and running local token service
const authReducer = (state = initialState, { type, payload, email }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
      };
    case LOGIN_ERROR:
    case LOGOUT_SUCCESS:
      localTokenService.delLocalTokens();
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        tokens: { access_token: null, refresh_token: null },
        email: null,
      };
    case USER_LOADING:
      return {
        ...state,
        isFetching: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isFetching: false,
        email: email,
      };
    case SET_TOKENS:
    case UPDATE_TOKENS:
      localTokenService.setLocalRefreshToken(payload.refresh_token);
      localTokenService.setLocalAccessToken(payload.access_token);
      return {
        ...state,
        tokens: {
          access_token: payload.access_token,
          refresh_token: payload.refresh_token,
        },
      };
    // case for setting only refresh token
    case SET_ACCESS_TOKEN:
      localTokenService.setLocalAccessToken(payload.access_token);
      return {
        ...state,
        tokens: {
          access_token: payload.access_token,
        },
      };
    // case for setting only refresh token
    case SET_REFRESH_TOKEN:
      localTokenService.setLocalRefreshToken(payload.refresh_token);
      return {
        ...state,
        tokens: {
          refresh_token: payload.refresh_token,
        },
      };
    default:
      return state;
  }
};

export default authReducer;
