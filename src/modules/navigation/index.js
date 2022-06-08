import AuthStackNavigator from './AuthStackNavigator';
import Splash from '../../screens/Splash';
import DashboardDrawerNavigator from './DashboardDrawerNavigator';

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthStackNavigator,
    Loading: Splash,
    App: DashboardDrawerNavigator,
  },
  {
    initialRouteName: 'App',
    backBehavior: 'none',
  },
);

export default createAppContainer(SwitchNavigator);
