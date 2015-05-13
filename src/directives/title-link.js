/**
 * Created by 烬云 on 2014/11/1.
 */
/*@ngInject*/
module.exports=function ($filter, ListUtil) {
  return {
    link: function (scope, element, attrs) {
      scope.$watch(attrs.titleLink, function () {
        var entity = scope.$eval(attrs.titleLink);
        if (typeof entity === 'string') {
          entity = $filter('source')(entity);
        }
        if (entity.id && entity.__t && entity.title) {
          if (entity) {
            element.text(entity.title)
              .on('click', function () {
                return ListUtil.action('View', entity);
              });
          }
        }
      }, true);
    }
  };
};
