/**
 * Created by 烬云 on 2014/9/4.
 */
var Q = require('q'),
  _ = require('lodash'),
  seed = require(process.cwd() + '/server/workflow/WorkflowSeed'),
  debug = require('debug')('workflow:ApproveWorkflow'),
  logger = require('log4js').getLogger('WorkflowInstance');

module.exports = _.extend(seed, {
  Initial: {
    enter: function (transition) {
      var owner = this;
      logger.info('id:%s,enter:%s', owner.id, transition.target.name);
      Q.async(function *() {
        //throw new Error('test error should be catch');
        //TODO:发送邮件至抄送人
        owner.state().go('LoopApprove', {
          success: function () {
            owner.workflowState = 'Progressing';
          }
        });
      })().catch(owner.state().method('errorHandler').bind(owner));
    }
  },
  LoopApprove: {
    enter: function (transition) {
      var owner = this;
      logger.info('id:%s,enter:%s', owner.id, transition.target.name);
      Q.async(function *() {
        owner.associatedData.index = owner.associatedData.index || 0;
        var queue = owner.associatedData.queue[owner.associatedData.index];
        logger.info('id:%s,index:%s,queue:%j', owner.id, owner.associatedData.index, queue);
        if (owner.associatedData.expand) {//是否展开组
          //TODO
        }
        yield owner.assignTask({
          title: '请审批' + owner.workflowItemTitle,
          assignTo: queue.assignTo,
          __t: 'WorkflowApproveTask',
          changedMethod: 'WorkflowApproveTaskChanged'
        });
        yield owner.sleep();
      })().catch(owner.state().method('errorHandler').bind(owner));
    },
    WorkflowApproveTaskChanged: function (task) {
      var owner = this;
      Q.async(function *() {
        if (task.percent === 100 || task.status === 'Completed') {//任务完成
          var isLast = owner.associatedData.index === owner.associatedData.queue.length - 1;
          //if (queue.type === 'parallel') {
          //
          //} else if (queue.type === 'serial') {
          //
          //}
          switch (task.outcome) {
            case 'Reject':
              owner.state().go('Rejected');
              break;
            case 'Approve':
              if (isLast) {//审批最后阶段已经完成
                owner.state().go('Approved');
              } else {//循环审批没有结束，索引递增，并再次进入该状态
                owner.associatedData.index++;
                owner.state().go('LoopApprove');
              }
              break;
            case 'ReAssign':
              logger.info('id:%s,%s.%s,extendProp:%j', owner.id, task.__t, task.id, task.extendProp);
              owner.associatedData.index++;
              owner.associatedData.queue.splice(owner.associatedData.index, 0, {assignTo: task.extendProp.assignTo});
              logger.info('id:%s,index:%s,queue:%j', owner.id, owner.associatedData.index, owner.associatedData.queue);
              yield owner.save();
              yield owner.workflowLogs.create({body: '任务重新分配'});
              break;
            case 'RequestChange':
              yield owner.assignTask({
                title: '请求更改',
                assignTo: owner.initiatorId,
                body: task.comment,
                __t: 'RequestChangeTask',
                changedMethod: 'RequestChangeTaskChanged'
              });
              owner.state().go('RequestChange');
              break;
            default:
              logger.error('id:%s,%s.%s,outcome:%s not bingo', owner.id, task.__t, task.id, task.outcome);
              break;
          }
        }
      })().catch(owner.state().method('errorHandler').bind(owner));
    }
  },
  Approved: {
    enter: function (transition) {
      var owner = this;
      logger.info('id:%s,enter:%s', owner.id, transition.target.name);
      Q.async(function *() {
        var updatedItem = yield owner.updateInitialItem({status: 'Approved'});
        logger.info('id:%s,%s.%s,status:%s', owner.id, updatedItem.__t, updatedItem.id, updatedItem.status);
        owner.state().go('Final');
      })().catch(owner.state().method('errorHandler').bind(owner));
    }
  },
  Rejected: {
    enter: function (transition) {
      var owner = this;
      logger.info('id:%s,enter:%s', owner.id, transition.target.name);
      Q.async(function *() {
        var updatedItem = yield owner.updateInitialItem({status: 'Rejected'});
        logger.info('id:%s,%s.%s,status:%s', owner.id, updatedItem.__t, updatedItem.id, updatedItem.status);
        owner.state().go('Final');
      })().catch(owner.state().method('errorHandler').bind(owner));
    }
  },
  RequestChange: {
    enter: function (transition) {
      var owner = this;
      logger.info('id:%s,enter:%s', owner.id, transition.target.name);
      Q.async(function *() {
        yield owner.sleep(transition.target.name);
      })().catch(owner.state().method('errorHandler').bind(owner));
    },
    RequestChangeTaskChanged: function (task) {
      var owner = this;
      if (task.percent === 100 || task.status === 'Completed') {//任务完成
        owner.state().go('LoopApprove');
      }
    }
  },
  Final: {
    enter: function (transition) {
      var owner = this;
      logger.info('id:%s,enter:%s', owner.id, transition.target.name);
      Q.async(function *() {
        //todo:流程结束
        yield owner.updateInitialItem({lk_update: true});
        yield owner.updateAttributes({workflowState: 'Completed'});
        yield owner.sleep();
      })().catch(owner.state().method('errorHandler').bind(owner));
    }
  }
});
