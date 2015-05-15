/**
 * Created by Nemo on 15/4/11.
 */
var state = require('state'),
  Q = require('q'),
  logger = require('log4js').getLogger('WorkflowInstance');

module.exports = {
  errorHandler: function (error) {
    var owner = this;
    logger.error('id:%s happen error', owner.id, error);
    //todo:邮件通知
    Q.async(function *() {
      yield owner.updateAttributes({workflowState: 'Terminated'});
      yield owner.workflowLogs.create({body: error.message});
    })()
  }
};
