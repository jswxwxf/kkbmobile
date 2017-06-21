import axios from 'axios';

import { inject, TYPES } from 'kkbmobile/app/config/inject';

import { appActions } from 'kkbmobile/app/shared/actions';

let utilService;

function getUtilService() {
  if (!utilService) {
    utilService = inject(TYPES.utilService);
  }
  return utilService;
}

// Add a request interceptor
// axios.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  getUtilService().hideSpinner();
  appActions.resultSucceed(response.data);
  return response;
}, function (error) {

  // Do something with response error
  getUtilService().hideSpinner();

  const { response: resp } = error;

  if (error.message == 'Network Error') {
    appActions.networkError(resp.data);
    return Promise.reject(error);
  }

  if (resp.data && resp.data.code == 401) {
    appActions.tokenExpired(resp.data);
    handleError(resp, 'config.tokenHandler');
    return Promise.reject(error);
  }

  var handled = handleError(resp, 'config.errorHandler');
  if (handled) return Promise.reject(error);

  if (resp.config && resp.config.errorHandled) return Promise.reject(error);
  appActions.resultFailed(resp.data || {});
  return Promise.reject(error);

});

function handleError(resp, handlerConfig) {
  var errorHandler = _.get(resp, handlerConfig);
  if (errorHandler && _.isFunction(errorHandler)) {
    var handled = errorHandler(resp.data, resp);
    if (handled === true) return true;
  }
  return false;
}
