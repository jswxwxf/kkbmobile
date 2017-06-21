import { AsyncStorage } from 'react-native';

export default class StoreService {

  _temp = {};

  storeTemp(k, val) {
    this._temp[k] = val;
  }

  getTemp(k) {
    return this._temp[k];
  }

  deleteTemp(k) {
    delete this._temp[k];
  }

  getToken() {
    return AsyncStorage.getItem('token');
  }

  setToken(token) {
    return AsyncStorage.setItem('token', token);
  }

  deleteToken() {
    return AsyncStorage.removeItem('token');
  }

  storeItem(k, val) {
    return AsyncStorage.setItem(k, val);
  }

  getItem(k) {
    return AsyncStorage.getItem(k);
  }

  deleteItem(k) {
    return AsyncStorage.removeItem(k);
  }

}