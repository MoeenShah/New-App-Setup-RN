import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const aspectRatio =
  (windowHeight / (windowHeight % windowWidth)).toFixed(0) /
  (windowWidth / (windowHeight % windowWidth)).toFixed(0);

console.log({aspectRatio, windowHeight, windowWidth});

export const hp = value => {
  //   if (aspectRatio <= 1.5)
  //     return ((windowHeight - StatusBar.currentHeight) * value) / 100;
  return (windowHeight * value) / 100;
};
export const wp = value => {
  return (windowWidth * value) / 100;
};

export const addCommas = value => {
  return value && value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Will remove spaces, check for numbers starting from +923, 923, 03 or 3.
// Then remove +92, 92 or 0 from the number's start and return.
// Returns error if number is not valid.
export const mobileNumberCheck = value => {
  const mobile = value.replace(/\s/g, '');
  if (mobile.length === 13 && mobile.substring(0, 4) === '+923') {
    return mobile.substring(3);
  }
  if (mobile.length === 12 && mobile.substring(0, 3) === '923') {
    return mobile.substring(2);
  }
  if (mobile.length === 11 && mobile.substring(0, 2) === '03') {
    return mobile.substring(1);
  }
  if (mobile.length === 10 && mobile.substring(0, 1) === '3') {
    return mobile;
  }
  return 'Invalid Mobile Number';
};
