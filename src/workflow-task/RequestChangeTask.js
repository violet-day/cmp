/**
 * Created by Nemo on 15/5/15.
 */
module.exports = 'cmp.requestChangeTask';
angular.module('cmp.requestChangeTask', [])
  .controller('RequestChangeTaskNewCtrl', ['$scope', function ($scope) {

  }])
  .controller('RequestChangeTaskEditCtrl', ['$scope', '$modalInstance', '$modal', 'WorkflowTask', 'toastr', 'doc',
    function ($scope, $modalInstance, $modal, WorkflowTask, toastr, doc) {
      $scope.doc = WorkflowTask.findOne({filter: {where: {id: doc.id}}});

      $scope.completeTask = function () {
        $scope.doc.$prototype$complete().then(function () {
          $modalInstance.close('Complete');
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

    }])
  .controller('RequestChangeTaskViewCtrl', ['$scope', '$modalInstance', function ($scope) {

  }]);
