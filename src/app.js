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

  'textAngular',

  require('./filter'),
  require('./directives'),

  require('./list'),
  require('./workflow'),
  require('./demo')
  //'cmp.list'
]).config(require('./config')).run(require('./run'))
  .controller('MainCtrl', require('./controllers/MainCtrl').MainCtrl)
  .controller('SideBarCtrl', require('./controllers/MainCtrl').SideBarCtrl)
  .controller('HeaderCtrl', require('./controllers/MainCtrl').HeaderCtrl)
