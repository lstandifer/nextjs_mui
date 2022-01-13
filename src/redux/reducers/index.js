import { combineReducers } from 'redux';

// reducer imports
import authReducer from './authReducer';
import sidebarReducer from './sidebarReducer';
import errorReducer from './errorReducer';
import themeReducer from './themeReducer';

export default combineReducers({
  auth: authReducer,
  sidebar: sidebarReducer,
  errors: errorReducer,
  theme: themeReducer,
});
