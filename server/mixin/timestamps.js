/**
 * Created by Administrator on 2014/11/26.
 */
var debug = require('debug')('mixin:timestamps');

module.exports = function (Model, option) {
  Model.defineProperty('created', {
    type: Date, default: function () {
      return new Date();
    }
  });
  Model.defineProperty('modified', {type: Date});
  Model.observe('before save', function (ctx, next) {
    ctx.instance.modified = new Date();
    next();
  });
};
