/**
 * Created by Administrator on 2014/12/8.
 */
angular.module('cmp')
  .controller('WorkflowSettingCtrl', ['$scope', '$state', '$stateParams', 'List', 'WorkflowInstance', 'WorkflowAssociation', 'toastr', 'blockUI', '$modal',
    function ($scope, $state, $stateParams, List, WorkflowInstance, WorkflowAssociation, toastr, blockUI, $modal) {
      WorkflowAssociation.find({
        filter: {
          where: {listId: $stateParams.list},
          include: [
            {
              relation: 'workflowTemplate',
              scope: {
                fields: ['title']
              }
            },
            {
              relation: 'instances'
            }
          ]
        }
      }).$promise.then(function (associations) {
          $scope.wfAss = associations;
        });
      $scope.addWorkflowAss = function () {
        $modal.open({
          templateUrl: 'views/workflow/addWrk.html',
          controller: 'AddWrkCtrl',
          resolve: {
            doc: function () {
              return {listId: $stateParams.list}
            }
          },
          backdrop: 'static'
        }).result.then(function () {
            $state.reload();
          });
      };

      $scope.setAssociateData = function (ass) {
        $modal.open({
          templateUrl: 'views/workflow-associate/' + ass.workflowTemplate.title + '.html',
          controller: ass.workflowTemplate.title + 'AssCtrl',
          resolve: {
            associateData: function () {
              return angular.copy(ass.associatedData);
            }
          },
          size: 'lg',
          backdrop: 'static'
        }).result.then(function (associateData) {
            ass.associatedData = associateData;
            console.log(associateData);
            return ass.$prototype$updateAttributes().$promoise
          }).then(function (result) {
            toastr.success('Set association data success');
            $state.reload();
          })
      };
    }])
  .controller('AddWrkCtrl', ['$scope', '$state', '$stateParams', 'WorkflowTemplate', 'WorkflowAssociation', 'toastr', 'blockUI', 'doc', '$modalInstance',
    function ($scope, $state, $stateParams, WorkflowTemplate, WorkflowAssociation, toastr, blockUI, doc, $modalInstance) {
      $scope.doc = doc;
      $scope.submit = function () {
        WorkflowAssociation.save($scope.doc).$promise.then(function (ass) {
          toastr.success('Create workflow association success');
          toastr.info('Please set association data');
          $modalInstance.close(ass);
        })
      };
    }]);
