import Reflux, { Store } from 'reflux';
import _ from 'lodash';

import { inject, TYPES } from 'kkbmobile/app/config/inject';
import { appActions, userActions } from 'kkbmobile/app/shared/actions';

import AppState from './app-state';

export default class AppStore extends Store {

  static appState = new AppState();

  utilService = inject(TYPES.utilService);
  userService = inject(TYPES.userService);

  constructor() {
    super();
    this.listenables = appActions;
  }

  onNetworkError() {
    this.utilService.toast('您的网络可能出现了问题，请稍后再试。');
  }

  onTokenExpired() {
    this.utilService.toast('登录过期，请重新登录');
    this.userService._deleteToken();  // 这里不能调 UserActions.logout()，因为 /logout api 也会检查 token，会死循环
    this.utilService.handleLogin();
  }

  onResultSucceed(result) {
    let message = result.msg;
    if (!_.isEmpty(message)) this.utilService.toast(message);
  }

  onResultFailed = (result) => {
    let message = result.error;
    if (result.errors) {
      message = _.values(result.errors).join('<br/>');
    }
    message = message || result.msg || result.message;
    if (!_.isEmpty(message)) this.utilService.toast(message.replace('<br/>', '\n'));
  }

}