import { Alert } from "react-native";
import { NavigationActions } from 'react-navigation';
// import Toast from 'react-native-simple-toast';

import { inject, TYPES } from 'kkbmobile/app/config/inject';
import Config from 'kkbmobile/app/config/config';

import { AppStore } from 'kkbmobile/app/shared/stores';

export default class UtilService {

  storeService = inject(TYPES.storeService);

  navigator;

  showSpinner(message, opts = {}) {
    // this.spinnerTimer = setTimeout(() => {
      AppStore.appState.loading = true;
      AppStore.appState.loadingText = message;
    // }, 500);
  }

  hideSpinner() {
    // clearTimeout(this.spinnerTimer);
    AppStore.appState.loading = false;
    AppStore.appState.loadingText = null;
  }

  /**
   * 处理 登录 和 页面回转
   */

  rememberAction(action) {
    if (Config.isPhantomAction(action)) return;
    this.storeService.storeTemp('backAction', action);
    // console.warn(`${action.routeName} remembered`);
  }

  returnBack(fallbackScreen) {
    const backAction = this.storeService.getTemp('backAction');
    if (backAction) return this.navigator.dispatch(backAction);
    this.navigate(fallbackScreen);
  }

  handleLogin() {
    this.navigate('Login');
  }

  navigate(screen) {
    if (!this.navigator) return;
    this.navigator.dispatch(NavigationActions.navigate({ routeName: screen }));
  }

  alert(message, opts = {}) {
    return new Promise((resolve) => {
      Alert.alert(
        opts.title,
        message,
        [
          { text: '确定', onPress: () => resolve() },
        ],
      );
    })
  }

  confirm(message, opts = {}) {
    return new Promise((resolve, reject) => {
      Alert.alert(
        opts.title,
        message,
        [
          { text: '取消', onPress: () => reject(), style: 'cancel' },
          { text: '确定', onPress: () => resolve() },
        ],
        {
          onDismiss: () => reject()
        }
      )
    });
  }

  toast(message, opts = {}) {
    // setTimeout(() => {
    //   Toast.show(message, opts.duration || Toast.SHORT);
    // }, 0);
    // const colors = {
    //   danger: {
    //     backgroundColor: globalStyles.colors.$danger,
    //     textColor: globalStyles.colors.$dark
    //   },
    //   success: {
    //     backgroundColor: globalStyles.colors.$success,
    //     textColor: globalStyles.colors.$dark
    //   },
    //   warning: {
    //     backgroundColor: globalStyles.colors.$warning,
    //     textColor: globalStyles.colors.$dark
    //   },
    //   info: {
    //     backgroundColor: globalStyles.colors.$dark,
    //     textColor: globalStyles.colors.$stable
    //   }
    // };
  }

}