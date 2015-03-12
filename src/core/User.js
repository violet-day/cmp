/**
 * Created by 烬云 on 2014/11/1.
 */
angular.module('cmp')
  .factory('UserUtil', [function () {
    return {
      include: []
    }
  }])
  .controller('UserNewCtrl', ['$scope', '$modalInstance', 'User', 'toastr', 'doc',
    function ($scope, $modalInstance, User, toastr, doc) {
      $scope.doc = doc;
      $scope.doc.password='888888';
      $scope.submit=function(){
        User.save($scope.doc).$promise
          .then(function(res){
            $modalInstance.close()
          })
          .then(null,function(res){
          })
      };
    }])
  .controller('UserEditCtrl', ['$scope', '$modalInstance', 'User', 'id', 'toastr',
    function ($scope, $modalInstance, User, id, toastr) {
      $scope.doc = User.findById({id: id});
      $scope.UserSelector=User.find();
//      User.general({id: id});
      $scope.submit = function () {
        $scope.doc.$prototype$updateAttributes()
          .then(function (result) {
            toastr.success('修改成功');
            $modalInstance.close(result);
          })
      }
    }])
  .controller('UserViewCtrl', ['$scope', '$modalInstance', 'User', 'id',
    function ($scope, $modalInstance, User, id) {
      $scope.doc = User.findById({id: id});
    }]);
