/**
 * Created by Administrator on 2014/11/27.
 */
var uuid = require('uuid');
var loopback = require('loopback');
var _ = require('lodash');

module.exports = function (Model, option) {

  option.uuid = _.isUndefined(option.uuid) ? true : option.uuid;

  if (option.uuid) {
    Model.defineProperty('uuid', {
      type: 'string', length: 36, default: function () {
        return uuid.v4();
      }
    });
  }

  option.title = _.isUndefined(option.title) ? true : option.title;

  if (option.title) {
    Model.defineProperty('title', {
      type: 'string', length: 50, index: true, default: function () {
        return uuid.v4();
      }
    });
  }

  option.__t = _.isUndefined(option.__t) ? true : option.__t;

  if (option.__t) {
    Model.defineProperty('__t', {
      type: 'string', length: 50
    });
    Model.observe('before save', function (ctx, next) {
      if (ctx.isNewInstance) {
        ctx.instance.__t = ctx.instance.__t || ctx.Model.definition.name;
      }
      next();
    });
  }


};
