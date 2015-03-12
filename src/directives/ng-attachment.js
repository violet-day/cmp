/**
 * Created by Administrator on 2014/11/18.
 */
angular.module('cmp')
  .value('attachmentOption', {
    url: '/api/AttachmentStorages/',
    target: 'doc',
    attr: 'attachments'
  })
  .run(['$rootScope', function ($rootScope) {
    $rootScope.attachmentConfig = {
      url: '/api/Attachments/',
      target: 'doc',
      attr: 'attachments'
    }
  }])
  .directive('ngAttachment', ['FileUploader', 'toastr', '$http', function (FileUploader, toastr, $http) {
    return {
      restrict: 'A',
      //scope: true,
      templateUrl: 'views/plugins/attachment.html',
      compile: function () {
        return {
          pre: function (scope, element, attributes) {
            scope.state=attributes.ngAttachment;
            scope.$watch(scope.attachmentConfig.target, function (newVal, oldVal) {
              if (newVal && !newVal.attachment) {
                newVal[scope.attachmentConfig.attr] = [];
              }
            });
            scope.uploader = new FileUploader({
              scope: scope,
              url: scope.attachmentConfig.url + scope.doc.__t + '/upload'
            });
          },
          post: function (scope, element, attributes) {
            //var options = angular.extend(scope.$eval(attributes.ngAttachment), attachmentOption);
            scope.delAttachment = function ($index, item) {
              $http.delete(scope.attachmentConfig.url + scope.doc.__t + '/files/' + item).success(function (data, status, headers) {
                scope.doc[scope.attachmentConfig.attr].splice($index, 1);
                toastr.success('删除成功');
              });
            };
            scope.uploader.onSuccessItem = function (item, response, status, headers) {
              scope.doc[scope.attachmentConfig.attr].push(item.file.name);
              toastr.success('上传成功');
              item.remove();
            };
          }
        };
      }
    }
  }]);
