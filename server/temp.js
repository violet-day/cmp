/**
 * Created by Administrator on 2014/10/27.
 */
var state = require('state'),
  _ = require('lodash'),
  co = require('co'),
  Q = require('q'),
  assert = require('assert'),
  app = require('./server');

var should = require('should');

Q.async(function *() {
  var ten = yield 10;
  console.log(ten, 10);
  var twenty = yield ten + 10;
  console.log(twenty, 20);
  var thirty = yield twenty + 10;
  console.log(thirty, 30);

  yield Promise.resolve('sdfsadf');
  //yield Promise.reject(new Error('sdfasfsf'))
  yield app.models.WorkflowTemplate.create({
    id:'ssss',
    state:'sss'
  })

})()
  .catch(function (err) {
  console.error('catched error',err);
})
//.then(function (result) {
//  console.log('reslove:',result);
//})

