import {
  SET_LOGIN_ERRORS,
  SET_REG_ERRORS,
  CLEAR_ALL_ERRORS,
  CLEAR_LOGIN_ERRORS,
  CLEAR_REG_ERRORS,
} from '../../actions/types';

const initialState = {
  login: null,
  registration: null,
};

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOGIN_ERRORS:
      return {
        ...state,
        login: payload,
      };
    case SET_REG_ERRORS:
      return {
        ...state,
        registration: payload,
      };
    case CLEAR_ALL_ERRORS:
      return {
        ...state,
        login: null,
        registration: null,
      };
    case CLEAR_LOGIN_ERRORS:
      return {
        ...state,
        login: null,
      };
    case CLEAR_REG_ERRORS:
      return {
        ...state,
        registration: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
