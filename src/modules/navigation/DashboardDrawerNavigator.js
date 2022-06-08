import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import DashboardStackNavigator from './DashboardStackNavigator';
import DashboardDrawerContent from '../../components/DashboardDrawerContent';

const DashboardDrawerNavigator = createDrawerNavigator(
  {
    DashboardStackNavigator: {
      screen: DashboardStackNavigator,
      navigationOptions: () => ({
        drawerLabel: 'Home',
        gestureEnabled: false,
        swipeEnabled: false,
      }),
    },
  },
  {
    initialRouteName: 'DashboardStackNavigator',
    drawerPosition: 'left',
    backBehavior: 'order',
    drawerType: 'front',
    drawerWidth: wp(70),
    defaultNavigationOptions: {},
    contentComponent: DashboardDrawerContent,
  },
);

export default DashboardDrawerNavigator;
