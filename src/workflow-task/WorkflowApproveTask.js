/**
 * Created by Administrator on 2014/12/11.
 */
angular.module('cmp')
  .controller('WorkflowApproveTaskNewCtrl', ['$scope', function ($scope) {

  }])
  .controller('WorkflowApproveTaskEditCtrl', ['$scope', '$modalInstance', '$modal', 'WorkflowTask', 'toastr', 'doc',
    function ($scope, $modalInstance, $modal, WorkflowTask, toastr, doc) {
      $scope.doc = WorkflowTask.findOne({filter: {where: {id: doc.id}}});

      $scope.approve = function (outcome) {
        $scope.doc.status = 'Completed';
        $scope.doc.outcome = 'Approved';
        $scope.submit();
      };
      $scope.reject = function () {
        $scope.doc.status = 'Completed';
        $scope.doc.outcome = 'Rejected';
        $scope.submit();
      };
      $scope.reAssignTask = function () {
        $modal.open({
          templateUrl: 'views/workflow-task/AssignTask/New.html',
          controller: 'ReassignTaskCtrl'
        }).result.then(function (result) {
            $scope.doc.status = 'Completed';
            $scope.doc.outcome = 'ReAssign';
            $scope.doc.extendProp = result;
          });
      };
      $scope.requestChange = function () {
        $scope.doc.status = 'Completed';
        $scope.doc.outcome = 'RequestChange';
      };

      $scope.submit = function () {
        $scope.doc.$prototype$updateAttributes().then(function (result) {
          toastr.success('submit success');
          $modalInstance.close(result);
        })
      }
    }])
  .controller('WorkflowApproveTaskViewCtrl', ['$scope', '$modalInstance', function ($scope) {

  }]);
