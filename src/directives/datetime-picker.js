/**
 * Created by Administrator on 2014/7/14.
 */
angular.module('cmp')
  .directive('datetimePicker', ['$filter', function ($filter) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function ($scope, $element, $attrs, $ctrl) {
        $element.attr('readonly', true);
        var defaultOption = {
          autoclose: true,
          pickerPosition: "bottom-right",
          language: 'zh-CN',
          todayBtn:true
        };
        var option = angular.extend(defaultOption, $scope.$eval($attrs.datetimePicker));
        $element.datetimepicker(option)
          .on('changeDate', function (event) {
            $ctrl.$setViewValue(event.date);
          });
      }
    }
  }]
);
