/**
 * Created by Nemo on 15/5/12.
 */
/*@ngInject*/
module.exports = function ($scope, $stateParams, $state, WorkflowInstance, instance, tasks, logs, toastr) {
  $scope.instance = instance;

  $scope.tasks = tasks;

  $scope.logs = logs;

  $scope.cancelWorkflow = function () {
    instance.$prototype$cancel().then(function () {
      toastr.success('终止流程成功');
      $state.reload();
    }, function (reason) {
      toastr.success(reason.data.error.message);
    });
  };

}
