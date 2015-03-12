/**
 * Created by Administrator on 2014/11/27.
 */
var loopback = require('loopback');

module.exports = function (Model, option) {

  Model.belongsTo(loopback.User, {as: 'owner', foreignKey: 'ownerId'});
  Model.belongsTo(loopback.User, {as: 'modifier', foreignKey: 'modifierId'});

  Model.observe('before save', function (ctx, next) {
    var token = loopback.getCurrentContext() ? loopback.getCurrentContext().get('accessToken') : null;
    if (ctx.instance.isNewRecord()) {
      ctx.instance.ownerId = ctx.instance.modifierId = token ? token.userId : 0;
    } else {
      ctx.instance.modifierId = token ? token.userId : 0;
    }
    next();
  });
};
