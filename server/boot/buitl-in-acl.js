/**
 * Created by Administrator on 2014/12/11.
 */
module.exports= function (app) {
  app.models.ACL.remoteMethod('checkPermission', {
    accepts: [
      {arg: 'principalType', type: 'string', required: true},
      {arg: 'principalId', type: 'string', required: true},
      {arg: 'model', type: 'string', required: true},
      {arg: 'property', type: 'string'},
      {arg: 'accessType', type: 'string'}
    ],
    returns: {arg: 'perm', type: 'object', root: true}
  });
};
