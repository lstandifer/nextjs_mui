import { LIGHT_THEME, DARK_THEME } from 'redux/actions/types';

const initialState = {
  selectedTheme: LIGHT_THEME,
};

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
const sidebarReducer = (state = initialState, { type }) => {
  switch (type) {
    case LIGHT_THEME:
      return { ...state, selectedTheme: LIGHT_THEME };
    case DARK_THEME:
      return { ...state, selectedTheme: DARK_THEME };
    default:
      return state;
  }
};

export default sidebarReducer;
