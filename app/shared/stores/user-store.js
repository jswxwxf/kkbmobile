import Reflux, { Store } from 'reflux';

import { inject, TYPES } from 'kkbmobile/app/config/inject';
import { userActions } from 'kkbmobile/app/shared/actions';

import UserState from './user-state';

export default class UserStore extends Store {

  static userState = new UserState();

  userService = inject(TYPES.userService);
  utilService = inject(TYPES.utilService);

  constructor() {
    super();
    this.listenables = userActions;
  }

  async onLogin(user) {
    this.utilService.showSpinner();
    const resp = await this.userService.login(user);
    UserStore.userState.setUser(resp.data.user);
    this.utilService.returnBack('Welcome');
  }

  async onCheckLogin() {
    const isLoggedIn = await this.userService.isLoggedIn();
    if (!isLoggedIn) {
      UserStore.userState.setUser(null);
      return;
    }
    const resp = await this.userService.getProfile();
    UserStore.userState.setUser(resp.data.data);
  }

  async onLogout(user) {
    const resp = await this.userService.logout();
    UserStore.userState.setUser(null);
    this.utilService.navigate('Welcome');
  }

  onSendCode(type, mobile) {
    if (type == 'register') return this.userService.sendRegisterCode(mobile);
    if (type == 'reset') return this.userService.sendResetCode(mobile);
  }

  async onRegister(user) {
    this.utilService.showSpinner();
    const resp = await this.userService.register(user);
    UserStore.userState.setUser(resp.data.user);
    this.utilService.returnBack('Welcome');
  }

  async resetPassword(user) {
    this.utilService.showSpinner();
    await this.userService.resetPassword(user);
    this.utilService.returnBack('Login');
  }

  async onGetProfile() {
    this.utilService.showSpinner();
    const resp = await this.userService.getProfile();
    UserStore.userState.setUser(resp.data.data);
  }

}