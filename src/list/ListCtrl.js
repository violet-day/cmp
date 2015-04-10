/**
 * Created by 烬云 on 2014/11/1.
 */
angular.module('cmp')
  .controller('ListCtrl', ['$scope', '$injector', '$state', '$stateParams', '$q', 'List', 'ACL', 'ListUtil', 'toastr', 'blockUI', 'localStorageService',
    function ($scope, $injector, $state, $stateParams, $q, List, ACL, ListUtil, toastr, blockUI, localStorageService) {
      //检查权限
      console.log(ACL);
      //ACL.checkPermission({
      //  model: $stateParams.list,
      //  principalType: 'USER',
      //  principalId: localStorageService.get('user').id,
      //  property: 'find',
      //  accessType: 'EXECUTE'
      //}).$promise.then(function (perm) {
      //    if (perm.permission === 'DENY') {
      //      toastr.error('Permission Denied');
      //    }
      //  });

      //设置默认gridOptions
      $scope.gridOptions = {
        useExternalSorting: true,
        useExternalFiltering: true,
        multiSelect: false,
        data: 'data',
        columnDefs: [],
        orderByColumnDefs:false,
        excludeProperties: ['id', '__t', '__v', '_attachments', '_lk_remove', '_lk_update', '_lk_workflow', 'moderationComments', 'remark', 'instanceId']
      };
      //grid相关的操作
      $scope.gridAction = {
        add: function () {
          ListUtil.action('New', {__t: $stateParams.list}).result.then(function () {
            $scope.getPagedDate();
          })
        },
        edit: function (entity) {
          ListUtil.action('Edit', entity).result.then(function () {
            $scope.getPagedDate();
          })
        },
        view: function (entity) {
          ListUtil.action('View', entity);
        },
        del: function (entity) {
          entity.$deleteById().then(function (result) {
            toastr.success('删除成功');
            $scope.getPagedDate();
          }, function (reason) {
            toastr.error(reason.data.error.message);
          });
        }
      };

      var service = $injector.get($stateParams.list);
      if ($injector.has($stateParams.list + 'Util')) {
        var util = $injector.get($stateParams.list + 'Util');
        $scope.gridAction = angular.extend($scope.gridAction, util.fn || {});
      }
      var actionMenu = ListUtil.getActionMenu(util ? util.menu : []);

      //List.debugColDef({modelName: $stateParams.list}).$promise.then(function (result) {
      //  $scope.gridOptions.columnDefs = result;
      //  $scope.gridOptions.columnDefs.splice(1, 0, actionMenu);
      //});

      //获取list信息
      $scope.list = List.findOne({
        filter: {
          where: {id: $stateParams.list},
          include: ['views']
        }
      }).$promise.then(function (result) {
          $scope.list = result;
          $scope.views = result.views;
          $scope.currentView = $scope.views[0];
          $scope.currentView.columns.splice(1, 0, actionMenu);
          $scope.gridOptions.columnDefs = $scope.currentView.columns;
          $scope.getPagedDate();
        });

      $scope.filter = {
        include: util ? util.include : [],
        limit: 20,
        page: 1,
        where: {
          //ownerId: 1
        }
      };

      $scope.gridOptions.onRegisterApi = function (gridApi) {
        $scope.gridApi = gridApi;
        $scope.gridApi.core.on.sortChanged($scope, function (grid, sortColumns) {
          $scope.filter.order = _.map(_.sortBy(sortColumns, function (col) {
            return col.sort.priority;
          }), function (col) {
            return [col.name, col.sort.direction.toUpperCase()].join(' ');
          }).join(',');
          $scope.getPagedDate();
        });
      };

      $scope.getPagedDate = function () {
        $scope.filter.offset = ($scope.filter.page - 1) * $scope.filter.limit;
        var gridBlock = blockUI.instances.get('gridBlock');
        gridBlock.start();
        $q.all([
          service.find({filter: $scope.filter}).$promise,
          service.count({where: $scope.filter.where}).$promise
        ]).then(function (result) {
          $scope.data = result[0];
          $scope.totalServerItems = result[1].count;
          gridBlock.stop();
        }, function (reason) {
          toastr.error(reason.data.error.message);
          gridBlock.stop();
        });
      };

    }])
  .controller('ListSettingCtrl', ['$scope', '$injector', '$state', '$stateParams', '$q', 'List', 'ACL', 'ListUtil', 'toastr', 'blockUI', 'localStorageService',
    function ($scope, $injector, $state, $stateParams, $q, List, ACL, ListUtil, toastr, blockUI, localStorageService) {
      console.log('ListSettingCtrl');
      $scope.list = List.findOne({
        filter: {
          where: {title: $stateParams.list},
          include: ['views']
        }
      })
    }]);
