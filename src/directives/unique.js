/**
 * Created by Administrator on 2014/12/10.
 */
angular.module('cmp')
  .directive('unique', ['$injector', function ($injector) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        var service = $injector.get(attrs.unique);
        var where = {};
        //scope.$watch(attrs.ngModel, _.throttle(function () {
        //  if (ngModel.$modelValue) {
        //    where[attrs.name] = ngModel.$modelValue;
        //    service.count({where: where}, function (res) {
        //      ngModel.$setValidity('unique', res.count === 0);
        //    });
        //  }else{
        //    ngModel.$setValidity('unique', true);
        //  }
        //}, 500));
        scope.$watch(attrs.ngModel, function () {
          if (ngModel.$modelValue) {
            where[attrs.name] = ngModel.$modelValue;
            service.count({where: where}, function (res) {
              ngModel.$setValidity('unique', res.count === 0);
            });
          }else{
            ngModel.$setValidity('unique', true);
          }
        });
      }
    };
  }]);
