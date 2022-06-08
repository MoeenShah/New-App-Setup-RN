import React from 'react';
import {Text} from 'react-native';
import logger from 'redux-logger';
import {createStore, compose, applyMiddleware} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createPromise} from 'redux-promise-middleware';
import {Provider} from 'react-redux';
import GetStack from './src/modules/navigation/GetStack';
import reducers from './src/reducers/index';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      createPromise({
        promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'],
      }),
      logger,
    ),
  ),
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer fallback={<Text>App.js</Text>}>
        <GetStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
