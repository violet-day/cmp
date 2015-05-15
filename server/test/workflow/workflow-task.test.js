/**
 * Created by Nemo on 15/5/14.
 */
var app = require('../../server'),
  Q = require('q');
  should = require('should');

describe('WorkflowTask', function () {

  before(function (done) {
    app.models.WorkflowTask.deleteAll(done);
  });
  after(function (done) {
    app.models.WorkflowTask.deleteAll(done);
  });
  describe('#reAssignTask', function () {

    it('should should throw 400 error', function (done) {
      app.models.WorkflowTask.create({
        title: 't1',
        assignTo: 'u1',
        status: 'Completed'
      }).then(function (task) {
        return task.reAssignTask({assignTo: 'jk', body: 'new task'})
      }).catch(function (err) {
        err.status.should.equal(400);
        done();
      });
    });

    it('should create cloned task and change before task', function (done) {
      app.models.WorkflowTask.create({
        title: 'before task',
        assignTo: 'nemo',
        instanceId: 153,
        changedMethod: 'WorkflowApproveTaskChanged'
      }).then(function (task) {
        return task.reAssignTask({assignTo: 'jk', body: 'new task'})
          .then(function (resAssigned) {
            resAssigned.title.should.equal(task.title);
            return app.models.WorkflowTask.findById(task.id);
          })
      }).then(function (reloaded) {
        reloaded.status.should.equal('Completed');
        reloaded.outcome.should.equal('ReAssign');
        done();
      }).catch(function (err) {
        console.log(err);
        should.not.exists(err);
        done();
      })
    });
  });
});
