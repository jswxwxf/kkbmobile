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
  },
  driveContainer: {
    flex: 1,
    paddingBottom: 20
  },
  driveImageWrapper: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  driveImage: {
    height: 200,
    width: null
  },
  creditContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  creditImageWrapper: {
    flex: 1
  },
  creditImage: {
    height: 300,
    width: null,
    marginVertical: 10,
    marginHorizontal: 5
  }
};
