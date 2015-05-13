/**
 * Created by Nemo on 15/4/11.
 */

var state = require('state');
var extend = require('util')._extend;
var Q = require('q');
var _=require('lodash')
var seed = {
  errorHandler: state.bind(function (err) {
    console.trace(err);
    this.logs.create({body: err.stack, type: 'Error'});
  }),
  seedSate: {
    enter: function () {
      console.log('enter seedSate');
    }
  }
};
var stateExpression = {
  Initial: {
    enter: function () {
      var owner = this;
      return owner.state().go('seedSate')
      //TODO:发送邮件至抄送人
      //owner.state().go('LoopApprove', {
      //  success: function () {
      //    owner.workflowState = 'Progressing';
      //  }
      //});
    }
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

