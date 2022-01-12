import {
  TOGGLE_LEFT_SIDEBAR,
  OPEN_LEFT_SIDEBAR,
  CLOSE_LEFT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
  OPEN_RIGHT_SIDEBAR,
  CLOSE_RIGHT_SIDEBAR,
} from '../../actions/types';

const defaultState = {
  leftIsVisible: false,
  rightIsVisible: false,
};

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
const sidebarReducer = (state = defaultState, { type }) => {
  switch (type) {
    case TOGGLE_LEFT_SIDEBAR:
      return { ...state, leftIsVisible: !state.leftIsVisible };
    case CLOSE_LEFT_SIDEBAR:
      return { ...state, leftIsVisible: false };
    case OPEN_LEFT_SIDEBAR:
      return { ...state, leftIsVisible: true };
    case TOGGLE_RIGHT_SIDEBAR:
      return { ...state, rightIsVisible: !state.rightIsVisible };
    case CLOSE_RIGHT_SIDEBAR:
      return { ...state, rightIsVisible: false };
    case OPEN_RIGHT_SIDEBAR:
      return { ...state, rightIsVisible: true };
    default:
      return state;
  }
};

export default sidebarReducer;
