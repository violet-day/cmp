/**
 * Created by 烬云 on 2014/11/1.
 */
angular.module('cmp')
  .factory('ListUtil', ['$modal', function ($modal) {
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
      view: '<li role="presentation"><a href role="menuitem" ng-click="getExternalScopes().view(row.entity)"><i class="fa fa-eye"></i>View</a></li>',
      edit: '<li role="presentation"><a href role="menuitem" ng-click="getExternalScopes().edit(row.entity)"><i class="fa fa-pencil"></i>Edit</a></li>',
      del: '<li role="presentation"><a href role="menuitem" ng-click="getExternalScopes().del(row.entity)"><i class="fa fa-trash-o"></i>Delete</a></li>',
      workflow: '<li role="presentation"><a ui-sref="main.workflow({list:row.entity.__t,id:row.entity.id,title:row.entity.title})" role="menuitem" ><i class="fa fa-check-square-o"></i>Workflow</a></li>'
    };
    listUtil.getActionMenu = function (menu) {
      console.log(menu);
      return {
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
    return listUtil;
  }]);
