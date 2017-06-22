import { action, observable } from 'mobx';

export default class AppState {

  @observable loading = false;
  @observable loadingText = "";

  @observable backdropVisible = false;

}