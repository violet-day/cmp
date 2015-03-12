/**
 * Created by Administrator on 2014/12/12.
 */
angular.module('cmp')
  .filter('source', [function () {
    return function (input) {
      var t = input.split('#');
      return {
        __t: t[0],
        title: t[1],
        id: Number(t[2])
      };
    }
  }]);
