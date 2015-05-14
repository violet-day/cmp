/**
 * Created by Nemo on 15/4/11.
 */
var state = require('state'),
  logger = require('log4js').getLogger('WorkflowInstance');

module.exports = {
  errorHandler: state.bind(function (err) {
    //console.log(err.stack);
    //console.log(this.owner);
    logger.error(err);
    //todo:错误处理
    //this.logs.create({body: err.stack, type: 'Error'});
  }),
};
