/**
 * Created by Administrator on 2014/12/10.
 */
angular.module('cmp')
  .controller('ApproveWorkflowAssCtrl', ['$scope', 'User', 'Role', 'toastr', '$modalInstance', 'associateData',
    function ($scope, User, Role, toastr, $modalInstance, associateData) {
      $scope.doc = {copyTo: []};
      Role.selector().$promise.then(function (result) {
        $scope.UserRoleSelector = result;
        return User.find({
          filter: {
            fields: ['id', 'username', 'email']
          }
        }).$promise
      }).then(function (result) {
        $scope.UserSelector = result;
        $scope.doc = associateData || $scope.doc;
        $scope.doc.queue = $scope.doc.queue || [{assignTo: [], type: 'serial'}];
      });
      $scope.submit = function () {
        $modalInstance.close($scope.doc);
      };
    }]);
