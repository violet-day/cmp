/**
 * Created by Nemo on 15/5/12.
 */
/*@ngInject*/
module.exports=function ($scope, $injector, $state, $stateParams, $q, List, ACL, ListUtil, toastr, blockUI, localStorageService) {
  console.log('ListSettingCtrl');
  $scope.list = List.findOne({
    filter: {
      where: {title: $stateParams.list},
      include: ['views']
    }
  })
}
