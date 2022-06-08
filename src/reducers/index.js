import { combineReducers } from 'redux';
import common from './common';
import user from './user';
import dashboard from './dashboard';

const reducers = {
  common,
  user,
  dashboard,
};

export default combineReducers(reducers);
