import { DashboardActions } from '../actionTypes';
import { get } from '../modules/requests';

export const getHomepageData = () => {
  return {
    type: `${DashboardActions.GET_HOMEPAGE_DATA}`,
    payload: get(''),
  };
};
