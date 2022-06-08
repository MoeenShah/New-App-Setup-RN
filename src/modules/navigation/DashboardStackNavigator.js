import React from 'react';
import { useSelector } from 'react-redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardDrawerContent from '../../components/DashboardDrawerContent';

import HomeScreen from '../../screens/HomeScreen';

const DashboardNavigator = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Screens() {
  return (
    <DashboardNavigator.Navigator
      initialRouteName={'HomeScreen'}
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'red' },
      }}
    >
      <DashboardNavigator.Screen name="HomeScreen" component={HomeScreen} />
    </DashboardNavigator.Navigator>
  );
}
const DashboardStackNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => {
        return <DashboardDrawerContent navigation={navigation} />;
      }}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        cardStyle: { backgroundColor: 'red' },
      }}
    >
      <DashboardNavigator.Screen name="Screens" component={Screens} />
    </Drawer.Navigator>
  );
};

export default DashboardStackNavigator;
