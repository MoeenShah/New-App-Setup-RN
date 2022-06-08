import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../screens/LoginScreen';

const AuthNavigator = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthNavigator.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthNavigator.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </AuthNavigator.Navigator>
  );
};
export default AuthStackNavigator;
