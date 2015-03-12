/**
 * Created by 烬云 on 2014/10/22.
 */
angular.module('cmp')
  .controller('GridCtrl', ['$scope', 'Post', function ($scope, Post) {
    $scope.columns = [
      {
        id: 'ff599720-96ea-4ac1-9b4c-573dbde9c258',
        name: 'title',
        type: 'string',
        displayName: 'title',
        enableCellEdit: false,
        cellTemplate: '<div class=\"ui-grid-cell-contents\"><a href title-link="row.entity"></a></div>'
      },
      {
        name: 'action',
        displayName: 'Action',
        enableCellEdit: false,
        enableFiltering: false,
        width: 50,
        enableSorting: false,
        enableColumnMenu: false,
        cellTemplate: '<span class="dropdown">' +
        '<a href class="dropdown-toggle" aria-haspopup="true" aria-expanded="true"><i class="fa fa-ellipsis-h"></i></a>' +
        '<ul class="dropdown-menu">' +
        '<li role="presentation"><a role="menuitem" tabindex="-1" ng-click="view(row)"><i class="fa fa-eye"></i>View</a></li>' +
        '<li role="presentation"><a role="menuitem" tabindex="-1" ng-click="edit(row)"><i class="fa fa-pencil"></i>Edit</a></li>' +
        '<li role="presentation"><a role="menuitem" tabindex="-1" ng-click="del(row)"><i class="fa fa-trash-o"></i> Delete</a></li>'+
        '<li role="presentation"><a role="menuitem" tabindex="-1"><i class="fa fa-check-square-o"></i>Workflow</a></li>' +
        '</ul></span>'
      },
      {
        id: '74f29f07-ec77-4f6d-becd-7415562dd0c9',
        name: 'created',
        type: 'date',
        displayName: 'created',
        cellFilter: 'date:"yy-MM-dd HH:mm"'
      }
    ];
    $scope.gridOptions = {
      enableFiltering: true,
      multiSelect: false,
      data: 'data',
      columnDefs: $scope.columns,
      excludeProperties: ['id', '__t', '__v', '_attachments', '_lk_remove', '_lk_update', '_lk_workflow', '_m_status', 'moderationComments', 'remark', 'instanceId']
    };
    $scope.data = Post.find();

    setTimeout(function () {
      $scope.columns = [
        {field: 'title', displayName: 'aaaaaaaaaaaaaaaaaaaa'}
      ];
    }, 3000)


  }]
);
