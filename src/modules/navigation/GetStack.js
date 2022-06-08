import React from 'react';
import { useSelector } from 'react-redux';
import AuthStackNavigator from './AuthStackNavigator';
import DashboardStackNavigator from './DashboardStackNavigator';
import Splash from '../../screens/Splash';

export default function GetStack() {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const isAppLoading = useSelector(state => state.user.isAppLoading);

  if (isAppLoading) {
    return <Splash />;
  }
  if (isLoggedIn) {
    return <DashboardStackNavigator />;
  } else {
    return <AuthStackNavigator />;
  }
}
