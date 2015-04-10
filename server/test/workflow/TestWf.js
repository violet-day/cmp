/**
 * Created by 烬云 on 2014/10/26.
 */
module.exports = {
  Initial: {
    enter: function (transition) {
      var owner = this;
      owner.state().go('Final', {
        success: function () {
          owner.workflowState = 'PROGRESSING';
        }
      });
    }
  },
  LoopApprove: {
    enter: function (transition) {

    },
    ApproveTaskChanged: function (task) {
      var owner = this;
      if (task.percent === 100) {//任务完成
        var queue = owner.associatedData.ApproveQueue[owner.associatedData.index],
          isLast = owner.associatedData.index == owner.associatedData.ApproveQueue.length - 1;
        if (queue.type == 'Parallel') {
          if (task.result.approval == 'Rejected') {//如果有拒绝，结束流程
            owner.setModerationStatus(task.result.approval)
              .then(function () {
                owner.state().go('Final');
              });
          } else {
            if (isLast) {//循环审批已经结束，跳转状态
              owner.setModerationStatus(task.result.approval)
                .then(function () {
                  owner.state().go('Final');
                });
            } else {//循环审批没有结束，索引递增，并再次进入该状态
              owner.log(task.assigned);
              owner.associatedData.index++;
              owner.state().go('LoopApprove');
            }
          }
        }
      }
    }
  },
  Final: {
    enter: function (transition) {
      var owner = this;
      console.log('final');
    }
  }
};
