import { StyleSheet, Platform } from 'react-native';

import { globalStyles } from 'kkbmobile/app/styles';

export default {
  ...globalStyles,
  container: {
    backgroundColor: globalStyles.colors.$background
  },
  list: {
    backgroundColor: 'white'
  },
  tabWrapper: {
    flexDirection: 'column'
  },
  tabIcon: {
    height: 26,
  },
  tabText: {
    fontSize: Platform.OS == 'ios' ? 12 : 14,
  },
  selectIcon: {
    width: 15,
    tintColor: '#777',
    marginLeft: 5
  }
};
