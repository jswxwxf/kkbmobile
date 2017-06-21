import { Platform } from 'react-native';

import { globalStyles } from 'kkbmobile/app/styles';

const isAndroid = Platform.OS === 'android';

export default {
  ...globalStyles,
  container: {
    marginTop: isAndroid ? 0 : 20
  },
  headerBg: {
    height: 150,
    width: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  menuIcon: {
    width: 23
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '80%',
    marginTop: 20,
    marginLeft: 15,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  headerButton: {
    height: 40,
    paddingTop: 3,
    paddingLeft: 30,
    paddingRight: 30
  },
  hotline: {
    width: 200,
  },
  avatarContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '80%',
    marginTop: 20,
    left: -5,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  name: {
    marginLeft: 15,
    color: globalStyles.colors.$stable
  },
  spinnerText: {
    color: globalStyles.colors.$light
  }
};
