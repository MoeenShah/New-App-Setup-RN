import { UserActions } from '../actionTypes';
import { post, put, get } from '../modules/requests';

export const updateUserState = data => ({
  type: `${UserActions.UPDATE_USER_STATE}`,
  data,
});

export const login = data => {
  return {
    type: `${UserActions.LOGIN}`,
    payload: post('', data),
  };
};
export const getUserByToken = () => {
  return {
    type: `${UserActions.GET_USER_BY_TOKEN}`,
    payload: get(''),
  };
};
