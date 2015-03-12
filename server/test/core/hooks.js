/**
 * Created by Administrator on 2014/11/26.
 */
var app = require('../../server'),
  Q = require('q'),
  hooks = require('hooks');

describe('#create', function () {
  var Model;
  before(function (done) {
    Model = function () {
    };
    // Add hooks' methods: `hook`, `pre`, and `post`
    for (var k in hooks) {
      Model[k] = hooks[k];
    }
    Model.create = function (data, cb) {
      var doc = new Model(data);
      doc.save(cb);
    };
    Model.prototype.save = function (cb) {
      var doc = this;
      console.log(this);
      setTimeout(function () {
        console.log(doc);
        cb();
      }, 0);
    };

    Model.pre('save', function (next) {
      setTimeout(function () {
        console.log('pre save');
        next();
      }, 10);
    });
    done();
  });
  it.only('Some state', function (done) {
    Model.create({name: 1}, done);
  });
});
