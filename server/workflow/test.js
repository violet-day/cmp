/**
 * Created by Nemo on 15/4/11.
 */

var state = require('state');
var extend = require('util')._extend;
var seed = require('./WorkflowSeed');
var Q = require('q');

var stateExpression = {
  Initial: {
    enter: function () {
      var owner = this;
      //TODO:发送邮件至抄送人
      owner.state().go('LoopApprove', {
        success: function () {
          owner.workflowState = 'Progressing';
        }
      });
    }
  },
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

module.exports = extend(stateExpression,seed );

