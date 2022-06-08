import React from 'react';

import { View, Text, Pressable } from 'react-native';

const HomeScreen = ({ updateUserState, navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>home screen</Text>
      <Pressable
        onPress={() => updateUserState({ name: 'isLoggedIn', value: false })}
      >
        <Text>logout</Text>
      </Pressable>
      <Pressable onPress={() => navigation.toggleDrawer()}>
        <Text>drawer</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
