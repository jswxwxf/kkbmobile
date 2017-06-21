import { Platform } from 'react-native';

import { globalStyles } from 'kkbmobile/app/styles';

let isAndroid = Platform.OS === 'android';

export default {
  ...globalStyles,
  container: {
    flex: 1
  },
  webView: {
    marginTop: isAndroid ? 0 : 22
  },
  button: {
    position: 'absolute',
    top: isAndroid ? 5 : 25,
    right: -15
  },
  icon: {
    fontSize: 30,
    backgroundColor: 'transparent'
  }
};