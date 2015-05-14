/**
 * Created by 烬云 on 2014/12/14.
 */
module.exports = 'cmp.reAssignTask';
angular.module('cmp.reAssignTask', [])
  /*@ngInject*/
  .controller('ReassignTaskCtrl', function ($scope, $modalInstance) {
    $scope.doc = {};
    $scope.submit = function () {
      $modalInstance.close($scope.doc);
    }
  });
