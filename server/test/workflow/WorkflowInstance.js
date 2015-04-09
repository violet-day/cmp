/**
 * Created by 烬云 on 2014/10/26.
 */

var app = require('../../server'),
  Q = require('q');
describe('WorkflowInstance', function () {
  var instance={};
  beforeEach(function () {
    app.models.WorkflowInstance.deleteAll();
  });
  describe('#initialWorkflow', function () {
    this.timeout(50000);
    //before(function (done) {
    //  var dataSource = app.dataSources.mysql;
    //  dataSource.automigrate(done);
    //});
    it('should create instance;set instanceId', function (done) {
      var initialItem;
      Q.all([
        Q.npost(app.models.List, 'create', [{title: 'Post'}]),
        Q.npost(app.models.Workflow, 'create', [{
          title: 'TestWorkflow',
          stateExpression: '../../server/workflow/TestWf'
        }]),
        Q.npost(app.models.Post, 'create', [{title: 'test'}])
      ]).then(function (result) {
        var list = result[0],
          workflow = result[1];
        initialItem = result[2];
        initialItem.__v.should.equal(1);
        return Q.npost(list.wfAss, 'create', [{
          associatedData: {ok: 1},
          workflowId: workflow.id
        }]);
      }).then(function (ass) {
        return Q.npost(app.models.WorkflowInstance, 'initialWorkflow', [1, initialItem, ass.id]);
      }).then(function (instance) {
        console.log(instance);
        should.exist(instance);
        done();
      }).then(null, function (err) {
        should.not.exist(err);
        done();
      });

    });
  });

  describe('#', function () {
    sleep
  });

});
