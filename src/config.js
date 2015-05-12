/**
 * Created by Nemo on 15/5/12.
 */
/*@ngInject*/
module.exports = function ($httpProvider, $locationProvider, $stateProvider, $urlRouterProvider, blockUIConfig, $translateProvider, uiSelectConfig) {
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
