import { StyleSheet } from 'react-native';

import { globalStyles } from 'kkbmobile/app/styles';

export default {
  ...globalStyles,
  container: {
    backgroundColor: globalStyles.colors.$background
  },
  list: {
    backgroundColor: 'white'
  },
  avatarWrapper: {
    height: 80
  }
};
