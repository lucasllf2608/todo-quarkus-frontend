import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth/reducer';
import todos from './todos/reducer';

export default combineReducers({
  auth,
  todos,
});