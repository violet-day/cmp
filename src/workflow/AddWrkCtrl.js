/**
 * Created by Nemo on 15/5/12.
 */
/*@ngInject*/
module.exports = function ($scope, $state, $stateParams, WorkflowTemplate, WorkflowAssociation, toastr, blockUI, doc, $modalInstance) {
  $scope.doc = doc;
  $scope.submit = function () {
    WorkflowAssociation.save($scope.doc).$promise.then(function (ass) {
      toastr.success('Create workflow association success');
      toastr.info('Please set association data');
      $modalInstance.close(ass);
    })
  };
}
