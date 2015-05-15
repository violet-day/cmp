/**
 * Created by Nemo on 15/4/11.
 */

var state = require('state');
var extend = require('util')._extend;
var Q = require('q');
var _=require('lodash')
var seed = {
  errorHandler: function (err) {
    console.trace(err);
    console.log(this);
  },
  seedSate: {
    enter: function () {
      console.log('enter seedSate');
    }
  }
};
var stateExpression = {
  Initial: {
    enter: function (transition) {
      var owner = this;

      Q.async(function *() {
        throw new Error('test error');

      })().catch(owner.state().method('errorHandler').bind(owner));
    },

  },
  //seedSate: {
  //  enter: function () {
  //    console.log('fix seedSate');
  //  }
  //},
  Approve: {
    enter: function () {

    }
  },
  Reject: {},
  RequestChange: {
    enter: function () {
    }
  },
  Final: {
    enter: function () {
      var owner = this;
      owner.updateInitialItem({'lock.update': true, 'lock.remove': true, 'lock.workflow': true})
        .then(function () {
          owner.workflowState = 'FINISHED';
          owner.internalState = 'Final';
          owner.completeAt = new Date();
          owner.save();
        })
    }
  }
};

var obj = {};
state(obj, _.extend(seed,stateExpression));
obj.state().go('Initial');

//module.exports = extend(stateExpression, seed);

