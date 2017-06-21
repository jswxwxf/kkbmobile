import { action, observable } from 'mobx';

import { userActions } from 'kkbmobile/app/shared/actions';

export default class UserState {

  user;

  @action setUser(user) {
    this.user = !user ? null : observable(user);
    userActions.userChanged(this.user);
  }

}