/**
 * Created by 烬云 on 2014/11/1.
 */
angular.module('cmp')
  .factory('PostUtil', [function () {
    return {
      include: [
        {
          relation: 'owner',
          scope: {
            fields: ['username', 'email']
          }
        },
        {
          relation: 'modifier',
          scope: {
            fields: ['username', 'email']
          }
        }
      ],
      menu: [
        '<li role="presentation"><a href role="menuitem" ng-click="getExternalScopes().addFn(row.entity)"><i class="fa fa-eye"></i>View</a></li>'
      ],
      fn: {
        addFn: function () {
          alert('我是扩展的函数')
        }
      }
    }
  }])
  .controller('PostNewCtrl', ['$scope', '$modalInstance', 'Post', 'toastr', 'doc',
    function ($scope, $modalInstance, Post, toastr, doc) {
      $scope.doc = doc;
      $scope.submit = function () {
        Post.create($scope.doc).$promise
          .then(function (result) {
            toastr.success('success');
            $modalInstance.close(result);
          }, function (reason) {
            toastr.error(reason.data.error.message);
          })
      };
    }])
  .controller('PostEditCtrl', ['$scope', '$modalInstance', 'Post', 'toastr', 'doc', 'Person',
    function ($scope, $modalInstance, Post, toastr, doc, Person) {
      $scope.doc = Post.findById({id: doc.id});
      $scope.submit = function () {
        $scope.doc.$prototype$updateAttributes()
          .then(function (result) {
            toastr.success('修改成功');
            $modalInstance.close(result);
          })
      }
    }])
  .controller('PostViewCtrl', ['$scope', '$modalInstance', 'Post', 'id',
    function ($scope, $modalInstance, Post, id) {
      console.log(id);
      $scope.doc = Post.findById({id: id});
    }]);
