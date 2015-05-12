/**
 * Created by Nemo on 15/5/12.
 */
module.exports = 'cmp.list';
angular.module('cmp.list', ['lbServices'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('main.list', {//列表页面
        url: '/list/:list?view&filter',
        templateUrl: 'views/list/content.html',
        controller: 'ListCtrl',
        resolve: {
          /*@ngInject*/
          list: function ($stateParams, List) {
            return List.findOne({
              filter: {
                where: {id: $stateParams.list},
                include: ['views']
              }
            }).$promise;
          }
        },
        ncyBreadcrumb: {
          label: '{{ $stateParams.list }}'
        }
      })
      .state('main.listSetting', {
        url: '/listSetting/:list',
        templateUrl: 'views/list/setting.html',
        controller: 'ListSettingCtrl',
        ncyBreadcrumb: {
          parent: 'main.list',
          label: 'List Setting'
        }
      })
  })
  .factory('ListUtil', require('./ListUtil'))
  .controller('ListCtrl', require('./ListCtrl'))
  .controller('ListSettingCtrl', require('./ListSettingCtrl'));
