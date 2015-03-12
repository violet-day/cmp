var Q = require('q'),
  debug = require('debug')('workflow:WorkflowTask');

module.exports = function (WorkflowTask) {
  WorkflowTask.on('changed', function (task) {
    Q.ninvoke(WorkflowTask.app.models.WorkflowInstance, 'findById', task.instanceId)
      .then(function (instance) {
        return instance.wakeUp(task);
      }).then(null, function (err) {
        debug(err);
      });
  })
};
