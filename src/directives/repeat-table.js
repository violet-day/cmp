/**
 * Created by Administrator on 2014/12/5.
 */
angular.module('cmp')
  .directive('repeatTable', ['toastr', function (toastr) {
    return {
      restrict: 'A',
      templateUrl: 'views/plugins/repeat-table.html',
      link:function (scope, element, attributes) {
        var option = scope.$eval(attributes.repeatTable);
        var rows = scope.$eval(option.rows);
        scope.insert = function (location) {
          rows.splice(location, 0, option.item);
        };
        scope.del = function ($index) {
          console.log($index);
          rows.splice($index, 1);
        }
      }
    }
  }]);
