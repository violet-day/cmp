/**
 * Created by Nemo on 15/5/12.
 */
/*@ngInject*/
module.exports = function ($scope, $state, $stateParams, List, WorkflowInstance, toastr, blockUI, wfAss, workflowLog) {

  $scope.wfAss = wfAss;

  $scope.workflowLog = workflowLog;

  $scope.initialWorkflow = function (ass) {
    blockUI.start();
    WorkflowInstance.initialWorkflow({
      association: ass,
      initialItem: {
        id: $stateParams.id,
        title: $stateParams.title,
        __t: $stateParams.list
      }
    }).$promise.then(function (res) {
        toastr.success('流程启动成功');
        blockUI.stop();
        $state.reload();
      }, function (reason) {
        blockUI.stop();
        toastr.error(reason.data.error.message);
      })
  };
};
