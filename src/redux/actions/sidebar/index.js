import {
  CLOSE_LEFT_SIDEBAR,
  TOGGLE_LEFT_SIDEBAR,
  CLOSE_RIGHT_SIDEBAR,
  TOGGLE_RIGHT_SIDEBAR,
} from '../types';

export const toggleLeftSidebar = (auth) => (dispatch) => {
  if (auth) {
    dispatch({ type: TOGGLE_LEFT_SIDEBAR });
  } else {
    dispatch({ type: CLOSE_LEFT_SIDEBAR });
  }
  return;
};

export const closeLeftSidebar = () => (dispatch) => {
  dispatch({ type: CLOSE_LEFT_SIDEBAR });
  return;
};

export const toggleRightSidebar = (auth) => (dispatch) => {
  if (auth) {
    dispatch({ type: TOGGLE_RIGHT_SIDEBAR });
  } else {
    dispatch({ type: CLOSE_RIGHT_SIDEBAR });
  }
  return;
};
export const closeRightSidebar = () => (dispatch) => {
  dispatch({ type: CLOSE_RIGHT_SIDEBAR });
  return;
};
