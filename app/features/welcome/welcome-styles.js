import { StyleSheet } from 'react-native'

import { globalStyles } from 'kkbmobile/app/styles';

export default {
  ...globalStyles,
  container: {
    backgroundColor: globalStyles.colors.$background
  },
  slideContainer: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideImage: {
    width: '100%',
    height: '100%'
  },
  actionContainer: {
    backgroundColor: 'white'
  },
  actionWrapper: {
    height: 100,
    marginVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor: globalStyles.colors.$border
  },
  actionWrapperLast: {
    borderRightWidth: 0
  },
  actionImage: {
    height: 60,
    width: 60,
  },
  actionText: {
    fontSize: 14,
  },
  insuranceContainer: {
    backgroundColor: 'white',
    marginVertical: 20,
  },
  insuranceImage: {
    width: 60,
    height: 60
  },
  insuranceTextWrapper: {
    height: 90,
    justifyContent: 'space-between'
  },
  insuranceButton: {
    top: -2
  }
};
