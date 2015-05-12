/**
 * Created by Nemo on 15/5/12.
 */
module.exports = 'cmp.workflow';
angular.module('cmp.workflow', ['lbServices'])
  .config(require('./route'))
  .controller('WorkflowSettingCtrl', require('./WrkSettingCtrl'))
  .controller('AddWrkCtrl', require('./AddWrkCtrl'))
  .controller('WorkflowCtrl', require('./WorkflowCtrl'))
  .controller('WorkflowStateCtrl', require('./WorkflowStateCtrl'))
