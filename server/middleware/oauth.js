/**
 * Created by Nemo on 15/4/10.
 */
module.exports = function (options) {
  return function oauth(err, req, res, next) {
    console.log('oauth2');
    next();
  }
};
