angular.module('cmp')
  .controller('LoginCtrl', ['$scope', '$state', '$http', 'User', '$rootScope', 'toastr', '$location', 'localStorageService',
    function ($scope, $state, $http, User, $rootScope, toastr, $location, localStorageService) {
      $scope.credentials = {
        username: 'nemo',
        password: '123456'
      };
      $scope.submit = function () {
        User.login($scope.credentials).$promise
          .then(function (result) {
            localStorageService.set('user', result.user);
            var next = $location.nextAfterLogin || '/';
            $location.nextAfterLogin = null;
            //$location.path(next);
            $state.go('main.list', {
              list: 'Post'
            });
          }, function (reason) {
            toastr.error(reason.data.error.message);
          });
      };
      $scope.submit();
    }]);
