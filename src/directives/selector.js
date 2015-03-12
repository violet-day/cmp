/**
 * Created by Administrator on 2014/12/9.
 */
angular.module('cmp')
  .directive('selector', ['$injector', function ($injector) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        var selector = scope.$eval(attrs.selector);
        if (scope[selector.service + 'Selector'])return;
        if ($injector.has(selector.service)) {
          $injector.get(selector.service).find({filter: selector.filter}).$promise.then(function (res) {
            scope.$parent[selector.service + 'Selector'] = res;
          });
        } else {
          console.error('Service ' + selector.service + ' Not Found');
        }
      }
    };
  }]);
