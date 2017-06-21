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
  itemIcon: {
    width: 23
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: globalStyles.colors.$border,
    marginBottom: 10
  },
  avatarContainer: {
    paddingVertical: 15,
    backgroundColor: 'green',
    height: 120,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  avatarText: {
    color: 'white'
  }
};
