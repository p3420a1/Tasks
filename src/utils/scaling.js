import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const vertical = (val) => Math.floor((val / 812) * height);
const horizontal = (val) => Math.floor((val / 375) * width);

export const Scaling = {
  vertical,
  horizontal,
};