import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserActions, Suffixes } from '../actionTypes';

const initalState = {
  loading: false,
  user: { cityId: 0 },
  isAppLoading: false,
  isLoggedIn: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case `${UserActions.UPDATE_USER_STATE}`:
      return { ...state, [action.data.name]: action.data.value };
    default:
      return state;
  }
};
