var Q = require('q'),
  debug = require('debug')('workflow:WorkflowTask');

module.exports = function (WorkflowTask) {
  //WorkflowTask.on('changed', function (task) {
  //  Q.ninvoke(WorkflowTask.app.models.WorkflowInstance, 'findById', task.instanceId)
  //    .then(function (instance) {
  //      return instance.wakeUp(task);
  //    }).then(null, function (err) {
  //      debug(err);
  //    });
  //})

  WorkflowTask.prototype.reAssignTask = function (assignTo, callback) {
    var doc = this;
    return Q.async(function *() {
      yield doc.updateAttributes({status: 'Completed'});
      return WorkflowTask.app.models[doc.__t].create(_.defaults(doc, {assignTo: assignTo || 'nemo'}))
    })().nodeify(callback);
  };

  WorkflowTask.remoteMethod('reAssignTask', {
    description: 'reAssignTask',
    isStatic: false,
    accepts: [
      {arg: 'assignTo', type: 'string', required: true}
    ]
  })
};
