/**
 * Created by 烬云 on 2014/9/4.
 */
var Q = require('q'),
  _ = require('lodash'),
  extend = require('util')._extend,
  seed = require(process.cwd() + '/server/workflow/WorkflowSeed'),
  debug = require('debug')('workflow:ApproveWorkflow'),
  logger = require('log4js').getLogger('WorkflowInstance');

module.exports = _.extend(seed, {
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
  LoopApprove: {
    enter: function () {
      var owner = this;
      Q.async(function *() {
        owner.associatedData.index = owner.associatedData.index || 0;
        var queue = owner.associatedData.queue[owner.associatedData.index];
        if (owner.associatedData.expand) {//是否展开组
          //TODO
        }
        yield Q.all(queue.assignTo.map(function (assignTo) {
          return owner.assignTask({
            title: '请审批' + owner.workflowItemTitle,
            assignTo: assignTo,
            __t: 'WorkflowTask',
            changedMethod: 'WorkflowTaskChanged'
          });
        }));
        yield owner.sleep();
      })().catch(owner.state().method('errorHandler'));
    },
    WorkflowTaskChanged: function (task) {
      var owner = this;
      if (task.percent === 100 || task.status === 'Completed') {//任务完成
        var queue = owner.associatedData.queue[owner.associatedData.index],
          isLast = owner.associatedData.index == owner.associatedData.queue.length - 1;
        if (queue.type === 'parallel') {
          if (task.outcome === 'Rejected') {//如果有拒绝
            owner.state().go('Reject');
          } else if (task.outcome === 'Approved') {
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
  Approve: {
    enter: function () {
      var owner = this;
      Q.async(function *() {
        logger.log('id:%s has been approved');
        //todo
        owner.state().go('Final');
      })().catch(owner.state().method('errorHandler'));
    }
  },
  Reject: {
    enter: function () {
      var owner = this;
      Q.async(function *() {
        logger.log('id:%s has been rejected');
        //todo
        owner.state().go('Final');
      })().catch(owner.state().method('errorHandler'));
    }
  },
  RequestChange: {
    enter: function () {
      var owner = this;
      Q.async(function *() {
        logger.debug('enter request change');
        //todo:create task for initiator
        yield owner.sleep();
      })().catch(owner.state().method('errorHandler'));
    }
  },
  Final: {
    enter: function () {
      var owner = this;
      Q.async(function *() {
        //todo流程结束
        yield owner.updateInitialItem({lk_update: true});
        yield owner.updateAttributes({workflowState: 'Completed'});
        yield owner.sleep();
      })().catch(owner.state().method('errorHandler'));
    }
  }
});
