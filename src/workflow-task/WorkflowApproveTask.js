/**
 * Created by Administrator on 2014/12/11.
 */
module.exports = 'cmp.workflowApproveTask';
angular.module('cmp.workflowApproveTask', [])
  .controller('WorkflowApproveTaskNewCtrl', ['$scope', function ($scope) {

  }])
  .controller('WorkflowApproveTaskEditCtrl', ['$scope', '$modalInstance', '$modal', 'WorkflowTask', 'toastr', 'doc',
    function ($scope, $modalInstance, $modal, WorkflowTask, toastr, doc) {
      $scope.doc = WorkflowTask.findOne({filter: {where: {id: doc.id}}});

      $scope.approve = function () {
        $scope.doc.$prototype$approve().then(function () {
          $modalInstance.close('Approve');
        });
      };
      $scope.reject = function () {
        $scope.doc.$prototype$reject().then(function () {
          $modalInstance.close('Reject');
        });
      };
      $scope.reAssignTask = function () {
        $modal.open({
          templateUrl: 'views/ReAssignTask/New.html',
          controller: 'ReassignTaskCtrl'
        }).result.then(function (result) {
            WorkflowTask.prototype$reAssignTask({
              id: $scope.doc.id,
              task: result
            }).$promise.then(function () {
                toastr.success('任务已经重新分配');
                $modalInstance.close('ReAssign');
              }, function (reason) {
                toastr.error(reason.data.error.message)
              });
          });
      };

      $scope.requestChange = function () {
        $scope.doc.$prototype$requestChange().then(function () {
          $modalInstance.close('RequestChange');
        });
      };

    }])
  .controller('WorkflowApproveTaskViewCtrl', ['$scope', '$modalInstance', function ($scope) {

  }]);
