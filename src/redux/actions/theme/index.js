import { LIGHT_THEME, DARK_THEME } from 'actions/types';

export const selectLightTheme = () => {
  dispatch({ type: LIGHT_THEME });
  return;
};
export const selectDarkTheme = () => {
  dispatch({ type: DARK_THEME });
  return;
};
