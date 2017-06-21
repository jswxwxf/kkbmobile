import React from 'react';
import { StyleProvider } from 'native-base';
import getTheme from 'kkbmobile/native-base-theme/components';
import platform from 'kkbmobile/native-base-theme/variables/platform';

const withTheme = (BaseComponent) => (props) => (
  <StyleProvider style={getTheme(platform)}>
    <BaseComponent {...props} />
  </StyleProvider>
);

export default withTheme;