import axios from 'axios';

import './inject';

export default class Config {

  static isPhantomAction = (action) => {
    return _.includes([
      'DrawerOpen', 'DrawerClose',
      'Welcome', 'Login', 'Register', 'Forget'
    ], action.routeName);
  }

}

axios.defaults.baseURL = 'https://api.kaikaibao.com.cn';
axios.defaults.headers.common['x-from'] = 'html5';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';