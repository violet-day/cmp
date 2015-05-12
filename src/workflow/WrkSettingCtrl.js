/**
 * Created by Administrator on 2014/12/8.
 */
/*@ngInject*/
module.exports = function ($scope, $state, $stateParams, List, WorkflowInstance, WorkflowAssociation, toastr, blockUI, $modal,associations) {
  $scope.wfAss = associations;

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
};
