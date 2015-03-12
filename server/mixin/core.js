/**
 * Created by Administrator on 2014/11/27.
 */
var uuid = require('uuid');
var loopback = require('loopback');

module.exports = function (Model, option) {
  Model.defineProperty('_id', {
    type: 'string', length: 36, default: function () {
      return uuid.v4();
    }
  });
  Model.defineProperty('title', {
    type: 'string', length: 50, index: true, default: function () {
      return uuid.v4();
    }
  });
  Model.defineProperty('__t', {
    type: 'string', length: 50
  });

  Model.observe('before save', function (ctx, next) {
    if (ctx.instance.isNewRecord()) {
      ctx.instance.__t = ctx.instance.__t || ctx.Model.definition.name;
    }
    next();
  });
};
