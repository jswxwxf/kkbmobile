import { StyleSheet } from 'react-native';

import { globalStyles } from 'kkbmobile/app/styles';

export default {
  ...globalStyles,
  container: {
    // backgroundColor: 'lightgray',
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  divider: {
    borderColor: globalStyles.colors.$border,
    borderBottomWidth: StyleSheet.hairlineWidth
  }
};