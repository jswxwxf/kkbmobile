import _ from 'lodash';

import { inject, TYPES } from 'kkbmobile/app/config/inject';
import BaseService from './base-service';

export default class UserService extends BaseService {

  storeService = inject(TYPES.storeService);

  async login(user) {
    const resp = await this._post('/2.0/login', user);
    this._setToken(resp.data.token);
    return Promise.resolve(resp);
  }

  async isLoggedIn() {
    const token = await this.storeService.getToken();
    return !_.isEmpty(token);
  }

  getProfile() {
    return this._get('/2.0/me');
  }

  async logout() {
    const resp = await this._post('2.0/logout', null);
    this._deleteToken();
    return resp;
  }

  sendRegisterCode(mobile) {
    return this._post('2.0/send/register', { mobile });
  }

  sendResetCode(mobile) {
    return this._post('2.0/send/resetpassword', { mobile });
  }

  async register(user) {
    const resp = await this._post('2.0/register', user);
    this._setToken(resp.data.token);
    return Promise.resolve(resp);
  }

  resetPassword(user) {
    return this._post('2.0/password/reset', user);
  }

  _setToken(token) {
    this.storeService.setToken(token);
  }

  _deleteToken() {
    this.storeService.deleteToken();
  }

}