/**
 * Created by Nemo on 15/5/12.
 */
/*@ngInject*/
module.exports = function ($scope, $stateParams, $state, WorkflowInstance, instance) {
  $scope.instance =instance;
  $scope.cancelWorkflow = function (_id) {
    WorkflowInstance.cancel({_id: _id}).$promise.then(function () {
      $state.transitionTo($state.current, $stateParams, {
        reload: true, inherit: true, notify: true
      });
    })
  };
  //$scope.tasks = Task.selector({filter: JSON.stringify({instance: $stateParams.instanceId})});
  //$scope.isAdmin = Group.inGroup({key: 'title', value: 'Administrator'});
  $scope.examine = function (task) {
    $modal.open({
      templateUrl: task.form + '/view.html',
      resolve: {
        _id: function () {
          return task._id;
        }
      },
      controller: 'TaskViewCtrl'
    })
  };
}
