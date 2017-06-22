import React from 'react';
import { Theme } from 'teaset';
import { StyleProvider } from 'native-base';
import getTheme from 'kkbmobile/native-base-theme/components';
import platform from 'kkbmobile/native-base-theme/variables/platform';

Theme.set({
  toastColor: 'rgba(0, 0, 0, 0.8)',
  toastPaddingLeft: 8,
  toastPaddingRight: 8,
  toastPaddingTop: 12,
  toastPaddingBottom: 12,
  toastBorderRadius: 8,
  toastIconTintColor: '#ddd',
  toastIconWidth: 40,
  toastIconHeight: 40,
  toastIconPaddingTop: 8,
  toastIconPaddingBottom: 8,
  toastTextColor: 'white',
  toastFontSize: 17,
  toastScreenPaddingLeft: 40,
  toastScreenPaddingRight: 40,
  toastScreenPaddingTop: 100,
  toastScreenPaddingBottom: 80,
});

const withTheme = (BaseComponent) => (props) => (
  <StyleProvider style={getTheme(platform)}>
    <BaseComponent {...props} />
  </StyleProvider>
);

export default withTheme;