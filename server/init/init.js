/**
 * Created by Administrator on 2014/10/27.
 */

var Q = require('q'),
  co = require('co'),
  _ = require('lodash'),
  userMap = require('./../meta/user'),
  roleMap = require('./../meta/role'),
  aclMap = require('./../meta/acl'),
  app = require('./../server');

module.exports = co.wrap(function *() {
  yield [
    Q.ninvoke(app.models.User, 'deleteAll'),
    Q.ninvoke(app.models.Role, 'deleteAll'),
    Q.ninvoke(app.models.RoleMapping, 'deleteAll'),
    Q.ninvoke(app.models.ACL, 'deleteAll'),
    Q.ninvoke(app.models.General, 'deleteAll')
  ];
  console.log('rest done');
  var users = yield userMap.map(function (u) {
    return Q.ninvoke(app.models.User, 'create', _.defaults({managerId: 0}, u));
  });
  console.log('create users done');
  var roles = yield roleMap.map(function (r) {
    return Q.ninvoke(app.models.Role, 'create', {title: r.name, name: r.name})
      .then(function (role) {
        return r.users.map(function (u) {
          return Q.ninvoke(role.principals, 'create', {
            principalType: 'USER',
            principalId: _.find(users, {username: u}).id,
            principalTitle: u
          });
        })
      });
  });
  console.log('create roles done');
  var acls = yield aclMap.map(function (acl) {
    return Q.ninvoke(app.models.ACL, 'create', acl)
  });
  console.log('create acls done');
  console.log(acls);
});
