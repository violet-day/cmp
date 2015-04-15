/**
 * Created by Nemo on 15/4/10.
 */

var bulelake = require('bluelake-node-client');
var sessionService = new bulelake('http://172.16.10.25:8888', 'sessionService');

module.exports = function () {
  return function oauth(req, res, next) {
    if (req.method === 'OPTIONS') {
      return next();
    }

    var err = new Error('asdfs');
    err.status = 11111;
    next(err);

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
