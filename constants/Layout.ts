import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  gapSmall: 8,
  gapLarge: 16,
  radiusSmall: 5,
  radiusLarge: 20,
  iconSmall: 41,
  iconLarge: 77,
  textboxHeightNarrow: 35,
  navbarHeight: 60,
  subnavarHeight: 34,
  postHeaderHeight: 57,
  textSmall: 10,
  textMid: 12,
  textLarge: 20,
};
