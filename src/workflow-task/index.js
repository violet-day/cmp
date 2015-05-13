/**
 * Created by Nemo on 15/5/13.
 */
module.exports = 'cmp.workflow.task';
angular.module('cmp.workflow.task', [
  require('./WorkflowApproveTask')
]).factory('WorkflowTaskUtil',require('./WorkflowUtil'))
