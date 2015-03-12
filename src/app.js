angular.module('cmp', [
  'cmp.tpl',
  'lbServices',

  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'ui.router',
  'ui.bootstrap',
  'ui.utils',
  'angular-lodash',
  'pascalprecht.translate',
  'LocalStorageModule',
  'toastr',
  'blockUI',
  'ncy-angular-breadcrumb',

  //'angular-chosen',
  //'localytics.directives',
  'ui.select',
  'angularFileUpload',
  'frapontillo.bootstrap-switch',

  'ui.grid',
  'ui.grid.edit',
  'ui.grid.moveColumns',
  'ui.grid.autoResize',
  'ui.grid.pinning',
  'ui.grid.resizeColumns',
  'ui.grid.selection',

  'textAngular'
]).config(['$httpProvider', '$locationProvider', '$stateProvider', '$urlRouterProvider', 'blockUIConfig', '$translateProvider', 'uiSelectConfig',
  function ($httpProvider, $locationProvider, $stateProvider, $urlRouterProvider, blockUIConfig, $translateProvider, uiSelectConfig) {
    //initialize get if not there
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }

    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
    $httpProvider.interceptors.push(function ($q, $location) {
      return {
        responseError: function (rejection) {
          if (rejection.status == 401) {
            var nextAfterLogin = $location.path();
            if (nextAfterLogin !== '/login') {
              $location.nextAfterLogin = $location.path();
            }
            $location.path('/login');
          }
          return $q.reject(rejection);
        }
      };
    });

    $translateProvider.useStaticFilesLoader({
      prefix: 'languages/',
      suffix: '.json'
    });

    blockUIConfig.templateUrl = 'views/plugins/angular-block-ui.html';
    blockUIConfig.autoBlock = false;
    blockUIConfig.message = 'processing';
    blockUIConfig.resetOnException = true;

    uiSelectConfig.theme = 'select2';

    $urlRouterProvider
      .when('/', '/index')
      .when('', '/index');
    //.otherwise('/login');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('main', {
        url: '',
        views: {
          '@': {
            templateUrl: 'views/main/index.html',
            controller: 'MainCtrl'
          },
          'header@main': {
            templateUrl: 'views/main/header.html',
            controller: 'HeaderCtrl'
          },
          'sidebar@main': {
            templateUrl: 'views/main/sidebar.html',
            controller: 'SideBarCtrl'
          },
          'footer@main': {
            templateUrl: 'views/main/footer.html'
          }
        },
        ncyBreadcrumb: {
          label: 'Home'
        }
      })
      .state('main.index', {
        url: '/index',
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl',
        data: {
          ncyBreadcrumbSkip: true
        }
      })
      .state('main.list', {//列表页面
        url: '/list/:list?view&filter',
        templateUrl: 'views/list/content.html',
        controller: 'ListCtrl',
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
      .state('main.wrkSetting', {
        url: '/wrkSetting/:list',
        templateUrl: 'views/list/wrkSetting.html',
        controller: 'WorkflowSettingCtrl',
        ncyBreadcrumb: {
          parent: 'main.listSetting',
          label: 'Workflow Setting'
        }
      })
      .state('main.addWrk', {
        url: '/addWrk/:list',
        templateUrl: 'views/workflow/addWrk.html',
        controller: 'AddWrkCtrl',
        ncyBreadcrumb: {
          parent: 'main.wrkSetting',
          label: 'Add Workflow'
        }
      })
      .state('main.wrkAss', {
        url: '/wrkAss/:list/:ass/:wft',
        templateUrl: function ($stateParams) {
          return 'views/workflow-associate/' + $stateParams.wft + '.html';
        },
        controllerProvider: function ($stateParams) {
          return $stateParams.wft + 'AssCtrl';
        },
        ncyBreadcrumb: {
          parent: 'main.wrkSetting',
          label: 'Set Workflow Association Data'
        }
      })
      .state('main.workflow', {
        url: '/workflow/:list?id&title',
        templateUrl: 'views/workflow/workflow.html',
        controller: 'WorkflowCtrl',
        ncyBreadcrumb: {
          parent: 'main.list',
          label: '{{ $stateParams.title }}'
        }
      })
      .state('main.wrkStat', {//工作流历史界面
        url: '/WrkStat/:workflow/:instanceId',
        templateUrl: 'views/workflow/wrkStat.html',
        controller: 'WorkflowStateCtrl',
        ncyBreadcrumb: {
          label: 'Workflow State : {{ $stateParams.workflow }}'
        }
      })

      .state('main.profile', {
        url: '/profile',
        templateUrl: 'views/extra/profile/index.html'
      })
      .state('main.calendar', {
        url: '/calendar',
        templateUrl: 'views/extra/calendar.html'
      });

    $stateProvider
      .state('main.test', {
        url: '/test',
        templateUrl: 'views/test.html'
      })
      .state('main.upload', {
        url: '/upload',
        templateUrl: 'views/upload.html',
        controller: ['$scope', function ($scope) {
          $scope.doc = {};
        }]
      })
      .state('main.grid', {
        url: '/grid',
        templateUrl: 'views/grid.html',
        controller: 'GridCtrl'
      })
  }
]).run(['$rootScope', '$modal', '$state', '$stateParams', 'localStorageService', '$translate',
  function ($rootScope, $modal, $state, $stateParams, localStorageService, $translate) {
    if (!localStorageService.get('lang')) {
      localStorageService.set('lang', 'us');
    }
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.localStorageService = localStorageService;
    $translate.use(localStorageService.get('lang'));
  }]);
