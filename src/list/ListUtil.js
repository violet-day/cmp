/**
 * Created by 烬云 on 2014/11/1.
 */
/*@ngInject*/
module.exports = function ($modal) {
  var listUtil = {};
  listUtil.action = function (action, entity) {
    return $modal.open({
      templateUrl: 'views/' + entity.__t + '/' + action + '.html',
      resolve: {
        id: function () {
          return entity.id || null;
        },
        doc: function () {
          return _.defaults({}, entity);
        }
      },
      //size: 'lg',
      backdrop: 'static',
      controller: entity.__t + action + 'Ctrl'
    });
  };
  listUtil.coreActionMenu = {
    view: '<li role="presentation"><a href role="menuitem" ng-click="col.grid.appScope.gridAction.view(row.entity)"><i class="fa fa-eye"></i>View</a></li>',
    edit: '<li role="presentation"><a href role="menuitem" ng-click="col.grid.appScope.gridAction.edit(row.entity)"><i class="fa fa-pencil"></i>Edit</a></li>',
    del: '<li role="presentation"><a href role="menuitem" ng-click="col.grid.appScope.gridAction.del(row.entity)"><i class="fa fa-trash-o"></i>Delete</a></li>',
    workflow: '<li role="presentation"><a ui-sref="main.workflow({list:row.entity.__t,id:row.entity.id,title:row.entity.title})" role="menuitem" ><i class="fa fa-check-square-o"></i>Workflow</a></li>'
  };
  listUtil.getActionMenu = function (menu) {
    menu = menu || [];
    return {
      field: 'action',
      name: 'action',
      displayName: '',
      enableCellEdit: false,
      enableFiltering: false,
      width: 50,
      enableSorting: false,
      enableColumnMenu: false,
      cellTemplate: '<span class="dropdown" dropdown>' +
      '<a href class="dropdown-toggle" dropdown-toggle><i class="fa fa-ellipsis-h"></i></a>' +
      '<ul class="dropdown-menu">' +
      listUtil.coreActionMenu.view +
      listUtil.coreActionMenu.edit +
      listUtil.coreActionMenu.del +
      listUtil.coreActionMenu.workflow +
      menu.join('') +
      '</ul></span>'
    }
  };

  //$scope.buildAction = function () {
  //  if ($scope.addOn) $scope.actionMenu.push($scope.addOn);
  //  var cellTemplate = '<div class="dropdown">' +
  //    '<a data-toggle="dropdown" class="none" ng-click="col.grid.appScope.setPermission(row.entity)"><div class="operate-icon"></div></a>' +
  //    '<ul class="dropdown-menu" role="menu" aria-labelledby="dLabel">' + $filter('buildAction')($scope.actionMenu) +
  //    '</ul>' +
  //    '</div>';
  //
  //  return {
  //    field: 'action',
  //    "displayName": '操作',
  //    "cellClass": "align-center",
  //    "groupable": false,
  //    "pinnable": false,
  //    enableColumnResizing: false,
  //    enableSorting: false,
  //    searchable: false,
  //    "minWidth": "50",
  //    "width": "50",
  //    "cellTemplate": cellTemplate
  //  };
  //}
  return listUtil;
};
