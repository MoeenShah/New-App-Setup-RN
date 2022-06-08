import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions, Suffixes } from '../actionTypes';

const initalState = {
  loading: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
