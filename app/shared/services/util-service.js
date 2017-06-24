import { Alert, InteractionManager } from "react-native";
import { NavigationActions } from 'react-navigation';
import { Toast } from 'teaset';

import { inject, TYPES } from 'kkbmobile/app/config/inject';
import Config from 'kkbmobile/app/config/config';

import { appActions } from 'kkbmobile/app/shared/actions';
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

  showBackdrop() {
    AppStore.appState.backdropVisible = true;
  }

  hideBackdrop() {
    AppStore.appState.backdropVisible = false;
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
    if (backAction) return this.navAction(backAction);
    this.nav(fallbackScreen);
  }

  handleLogin() {
    this.nav('Login');
  }

  nav(screen, navigator = this.navigator) {
    if (!navigator) return;
    if (this.navigating && screen == this.lastScreen) return;
    this.navigating = true;
    this.lastScreen = screen;
    requestAnimationFrame(() => {
      navigator.dispatch(NavigationActions.navigate({ routeName: screen }));
    }, 0);
    setTimeout(() => this.navigating = false, 500);
  }

  quickNav(screen, navigator = this.navigator) {
    if (!navigator) return;
    navigator.dispatch(NavigationActions.navigate({ routeName: screen }))
  }

  navAction(action, navigator = this.navigator) {
    requestAnimationFrame(() => navigator.dispatch(action), 0);
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
    Toast.message(message);
    // setTimeout(() => {
    //   Toast.show(message, opts.duration || Toast.SHORT);
    // }, 100);
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