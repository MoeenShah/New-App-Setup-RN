import { DashboardActions, Suffixes } from '../actionTypes';

const initalState = {
  loadingHomeData: false,
  featuredHomeData: [],
};

export default (state = initalState, action) => {
  switch (action.type) {
    case `${DashboardActions.GET_HOMEPAGE_DATA}_${Suffixes.REQUEST}`:
      return {
        ...state,
        loadingHomeData: true,
      };
    case `${DashboardActions.GET_HOMEPAGE_DATA}_${Suffixes.SUCCESS}`:
      return {
        ...state,
        loadingHomeData: false,
        featuredHomeData: action.payload,
      };
    case `${DashboardActions.GET_HOMEPAGE_DATA}_${Suffixes.FAILURE}`:
      return {
        ...state,
        featuredHomeData: {},
        loadingHomeData: false,
      };
    default:
      return state;
  }
};
