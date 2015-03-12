/**
 * Created by Administrator on 2014/12/11.
 */
var
  Q = require('q'),
  co = require('co'),
  _ = require('lodash');

module.exports = function (app) {
  var Role = app.models.Role;
  Role.mixin('Core');
  Role.mixin('TimeStamp');

  Role.remoteMethod('getRoles', {
    accepts: [
      {
        arg: 'context', type: 'object',
        http: function (ctx) {
          return {principalType: 'USER', principalId: ctx.req.accessToken.userId};
        }
      }
    ],
    returns: {arg: 'roles', type: 'array'}
  });

  Role.remoteMethod('isInRole', {
    accepts: [
      {
        arg: 'role', type: 'string', required: true
      },
      {
        arg: 'context', type: 'object',
        http: function (ctx) {
          return {principalType: 'USER', principalId: ctx.req.accessToken.userId};
        }
      }
    ],
    returns: {arg: 'exists', type: 'boolean'}
  });

  Role.selector = function (userOnly, roleOnly, role, cb) {
    //Q(co(function *() {
    //  //仅仅筛选用户
    //  if (userOnly === true) {
    //    return Q.ninvoke(app.models.User, 'find', {fields: ['id', 'title', '__t']});
    //  }
    //  //仅仅筛选角色
    //  if (roleOnly === true) {
    //    return Q.ninvoke(app.models.Role, 'find', {fields: ['id', 'title', '__t']});
    //  }
    //  //只限定某个角色
    //  if (role) {
    //    var searchRole = yield Q.ninvoke(app.models.Role, 'findOne', {
    //      where: {name: role},
    //      include: [
    //        {
    //          relation: 'principals',
    //          scope: {
    //            fields: ['principalId', 'principalTitle']
    //          }
    //        }
    //      ]
    //    });
    //    if (!searchRole)return Q([]);
    //    return Q(searchRole.toObject().principals.map(function (p) {
    //      return {
    //        id: Number(p.principalId),
    //        title: p.principalTitle,
    //        __t: 'User'
    //      }
    //    }))
    //  }
    //  //都不做限定
    //  if (userOnly === false && roleOnly === false && !role) {
    //    var t = yield [
    //      Q.ninvoke(app.models.User, 'find', {fields: ['id', 'title', '__t']}),
    //      Q.ninvoke(app.models.Role, 'find', {fields: ['id', 'title', '__t']})
    //    ];
    //    return Q(t[0].concat(t[1]));
    //  }
    //})).nodeify(cb);

    co(function *() {
      //仅仅筛选用户
      if (userOnly === true) {
        return Q.ninvoke(app.models.User, 'find', {fields: ['id', 'title', '__t']});
      }
      //仅仅筛选角色
      if (roleOnly === true) {
        return Q.ninvoke(app.models.Role, 'find', {fields: ['id', 'title', '__t']});
      }
      //只限定某个角色
      if (role) {
        var searchRole = yield Q.ninvoke(app.models.Role, 'findOne', {
          where: {name: role},
          include: [
            {
              relation: 'principals',
              scope: {
                fields: ['principalId', 'principalTitle']
              }
            }
          ]
        });
        if (!searchRole)return Q([]);
        return Q(searchRole.toObject().principals.map(function (p) {
          return {
            id: Number(p.principalId),
            title: p.principalTitle,
            __t: 'User'
          }
        }))
      }
      //都不做限定
      if (userOnly === false && roleOnly === false && !role) {
        var t = yield [
          Q.ninvoke(app.models.User, 'find', {fields: ['id', 'title', '__t']}),
          Q.ninvoke(app.models.Role, 'find', {fields: ['id', 'title', '__t']})
        ];
        return Q(t[0].concat(t[1]));
      }
    }).then(function (result) {
      cb(null, result);
    }).catch(function (err) {
      cb(err);
    })
  };

  Role.remoteMethod('selector', {
    accepts: [
      {
        arg: 'userOnly', type: 'boolean', default: false
      },
      {
        arg: 'roleOnly', type: 'boolean', default: false
      },
      {
        arg: 'role', type: 'string'
      }
    ],
    returns: {arg: 'selector', type: 'array', root: true}
  });
};
