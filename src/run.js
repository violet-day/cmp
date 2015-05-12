/**
 * Created by Nemo on 15/5/12.
 */
/*@ngInject*/
module.exports = function ($rootScope, $modal, $state, $stateParams, localStorageService, $translate) {
  if (!localStorageService.get('lang')) {
    localStorageService.set('lang', 'us');
  }
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.localStorageService = localStorageService;
  $translate.use(localStorageService.get('lang'));
};
