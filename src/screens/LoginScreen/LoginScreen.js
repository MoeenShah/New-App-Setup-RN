import React from 'react';

import { View, Text, Pressable } from 'react-native';

const LoginScreen = ({ updateUserState }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
        onPress={() => updateUserState({ name: 'isLoggedIn', value: true })}
      >
        <Text>login</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
