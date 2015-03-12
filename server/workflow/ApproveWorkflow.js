/**
 * Created by 烬云 on 2014/9/4.
 */
var Q = require('q'),
  co = require('co'),
  _ = require('lodash'),
  debug = require('debug')('workflow:ApproveWorkflow');

module.exports = {
  Initial: {
    enter: function (transition) {
      var owner = this;
      //TODO:发送邮件至抄送人
      owner.state().go('LoopApprove', {
        success: function () {
          owner.workflowState = 'Progressing';
        }
      });
    }
  },
  LoopApprove: {
    enter: function () {
      var owner = this;
      co(function *() {
        owner.associatedData.index = owner.associatedData.index || 0;
        var queue = owner.associatedData.queue[owner.associatedData.index];
        if(owner.associatedData.expand){//是否展开组
          //TODO
        }
        yield Q.all(queue.assignTo.map(function (assignTo) {
          return owner.assignTask({
            title: '请审批' + owner.workflowItemTitle,
            assignTo: assignTo,
            __t: 'WorkflowApproveTask',
            changedMethod: 'WorkflowApproveTaskChanged'
          });
        }));
        yield owner.sleep();
      }).catch(function (err) {
        Q.ninvoke(owner.logs, 'create', ({body: err.stack, type: 'Error'}));
      });
    },
    WorkflowApproveTaskChanged: function (task) {
      var owner = this;
      if (task.percent === 100 || task.status === 'Completed') {//任务完成
        var queue = owner.associatedData.queue[owner.associatedData.index],
          isLast = owner.associatedData.index == owner.associatedData.queue.length - 1;
        if (queue.type === 'parallel') {
          if (task.outcome === 'Rejected') {//如果有拒绝，结束流程
            owner.state().go('Reject');
          } else {
            if (isLast) {//审批最后阶段已经完成
              owner.state().go('Approved');
            } else {//循环审批没有结束，索引递增，并再次进入该状态
              owner.associatedData.index++;
              owner.state().go('LoopApprove');
            }
          }
        } else if (queue.type === 'serial') {

        }
      }
    }
  },
  Final: {
    enter: function (transition) {
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