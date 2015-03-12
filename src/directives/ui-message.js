/**
 * Created by Administrator on 2014/12/8.
 */
angular.module('cmp')
  .directive('uiMessage', ['$filter', function ($filter) {
    return {
      require: 'ngModel',
      link: function (scope, element, attrs, ngModel) {
        function apply_tooltip_options(element, message) {
          return {
            /* Using Twitter Bootstrap Defaults if no settings are given */
            animation: $(element).data('animation') || true,
            html: $(element).data('html') || false,
            placement: $(element).data('placement') || 'bottom',
            title: $(element).attr('title') || message,
            trigger: $.trim('manual ' + ($(element).data('trigger') || '')),
            delay: $(element).data('delay') || 0,
            container: $(element).data('container') || false
          };
        }

        var defaultMessages = {
          required: 'Required',// "请填写此字段。",
          remote: "请填写此字段。",
          email: "请输入电子邮件地址。",
          url: "请输入一个url。",
          date: "请输入合法的日期",
          dateISO: "请输入合法的日期 (ISO).",
          number: 'Invalid Number',//"请输入合法的数字。",
          equalTo: "请再次输入相同的值",
          accept: "请输入拥有合法后缀名的字符串",
          unique: '您输入的内容已经存在！',
          editable: '请从提示内容中选择一个选项',
          exist: '您输入的内容不存在！',
          undef: 'Please fix this filed'
        };

        element.bind('blur', function () {
          var messages = angular.extend(defaultMessages, scope.$eval(attrs.uiMessage));
          $(element).tooltip('destroy');
          _.some(ngModel.$error, function (value, key) {
            if (value) {
              return $(element).tooltip(apply_tooltip_options(element, messages[key] || messages.undef)).tooltip('show');
            }
          });
        });
      }
    };
  }]);
