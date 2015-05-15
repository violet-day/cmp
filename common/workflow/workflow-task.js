var Q = require('q'),
  _ = require('lodash'),
  assert = require('assert'),
  debug = require('debug')('workflow:WorkflowTask');

module.exports = function (WorkflowTask) {

  WorkflowTask.prototype.wakeUpInstance = function () {
    var doc = this;
    return WorkflowTask.app.models.WorkflowInstance.findById(doc.instanceId)
      .then(function (inst) {
        return inst.wakeUp(doc);
      })
  };

  WorkflowTask.prototype.reAssignTask = function (task, callback) {
    var doc = this;
    assert(task.assignTo,'Task assignTo can not be blank');
    assert(task.body,'Task body can not be blank');

    return Q.async(function *() {
      if (doc.status === 'Completed') {
        var error = new Error('Task Completed');
        error.status = 400;
        throw error;
      }
      yield doc.updateAttributes({status: 'Completed', outcome: 'ReAssign', extendProp: task});
      var obj = _.clone(doc.toObject());

      delete obj.id;
      delete obj.status;
      delete obj.outcome;
      delete obj.extendProp;
      delete obj.comment;
      delete obj.created;
      delete obj.modified;

      doc.wakeUpInstance();

      return yield WorkflowTask.create(_.extend(obj, task));
    })().nodeify(callback);
  };

  WorkflowTask.prototype.approve = function (callback) {
    var doc = this;
    return Q.async(function *() {
      if (doc.status === 'Completed') {
        var error = new Error('Task Completed');
        error.status = 400;
        throw error;
      }
      yield doc.updateAttributes({status: 'Completed', outcome: 'Approve'});
      doc.wakeUpInstance();
    })().nodeify(callback)
  };

  WorkflowTask.prototype.reject = function (callback) {
    var doc = this;
    return Q.async(function *() {
      if (doc.status === 'Completed') {
        var error = new Error('Task Completed');
        error.status = 400;
        throw error;
      }
      yield doc.updateAttributes({status: 'Completed', outcome: 'Reject'});
      doc.wakeUpInstance();
    })().nodeify(callback)
  };

  WorkflowTask.prototype.requestChange = function (callback) {
    var doc = this;
    return Q.async(function *() {
      if (doc.status === 'Completed') {
        var error = new Error('Task Completed');
        error.status = 400;
        throw error;
      }
      yield doc.updateAttributes({status: 'Completed', outcome: 'RequestChange'});
      doc.wakeUpInstance();
    })().nodeify(callback)
  };

  WorkflowTask.prototype.complete = function (callback) {
    var doc = this;
    return Q.async(function *() {
      if (doc.status === 'Completed') {
        var error = new Error('Task Completed');
        error.status = 400;
        throw error;
      }
      yield doc.updateAttributes({status: 'Completed', outcome: 'Completed'});
      doc.wakeUpInstance();
    })().nodeify(callback)
  };

  //<editor-fold desc="remoteMethod">

  WorkflowTask.remoteMethod('reAssignTask', {
    description: '重新分配任务',
    isStatic: false,
    accepts: [
      {arg: 'task', type: 'object', required: true}
    ],
    returns: {arg: 'task', type: 'object', root: true, description: '重新分配创建的任务'},
    http: {verb: 'Post'}
  });

  WorkflowTask.remoteMethod('approve', {
    description: '设置任务为批准',
    isStatic: false,
    accepts: [],
    http: {verb: 'Post'}
  });

  WorkflowTask.remoteMethod('reject', {
    description: '设置任务为拒绝',
    isStatic: false,
    accepts: [],
    http: {verb: 'Post'}
  });

  WorkflowTask.remoteMethod('requestChange', {
    description: '请求更改',
    isStatic: false,
    accepts: [],
    http: {verb: 'Post'}
  });

  WorkflowTask.remoteMethod('complete', {
    description: '请求更改',
    isStatic: false,
    accepts: [],
    http: {verb: 'Post'}
  });

  //</editor-fold>
};
