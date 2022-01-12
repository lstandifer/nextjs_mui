import { toggleLeftSidebar } from './sidebar';
import { loginUser, registerUser, validateToken, refreshToken } from './auth';

const combineReducers = {
  toggleLeftSidebar,
  loginUser,
  registerUser,
  validateToken,
  refreshToken,
};

export default combineReducers;
