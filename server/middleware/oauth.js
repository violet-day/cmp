/**
 * Created by Nemo on 15/4/10.
 */

var bulelake = require('bluelake-node-client');
var sessionService = new bulelake('http://172.16.10.25:8888', 'sessionService');
var loopback = require('loopback');
var logger = require('log4js').getLogger('middleware:oauth');

module.exports = function () {
  return function oauth(req, res, next) {
    if (req.method === 'OPTIONS') {
      return next();
    }

    logger.debug('process oauth middleware');
    var loopbackContext = loopback.getCurrentContext();
    if (loopbackContext) {
      loopbackContext.set('currentUser', {username: 'nemo', id: 1, roles: ['$admin']});
    }
    return next();
    var sso_token = req.headers['sso_token'],
      http_access_token = req.headers['http_access_token'];

    if (sso_token) {
      sessionService.rpcInvoke('checkToken', {access_token: http_access_token})
        .then(function (result) {
          console.log(result);
          next();
        })
        .catch(function (err) {
          err.statusCode = 400;
          next(err);
        });
    } else {
      next();
    }
  }
};
