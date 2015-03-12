/**
 * Created by Administrator on 2014/10/24.
 */
angular.module('cmp')
  .controller('IndexCtrl', ['$scope', '$state', '$http', 'User', '$rootScope', 'toastr', '$location', 'localStorageService',
    function ($scope, $state, $http, User, $rootScope, toastr, $location, localStorageService) {
      console.log('index ctrl');
    }
  ]);
