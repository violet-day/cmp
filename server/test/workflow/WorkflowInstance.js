/**
 * Created by 烬云 on 2014/10/26.
 */

var app = require('../../server'),
  Q = require('q'),
  should = require('should');

describe('WorkflowInstance', function () {
  var instance = {};
  beforeEach(function () {
    app.models.WorkflowInstance.deleteAll();
  });
  //todo:测试
  describe('#initialWorkflow', function () {
    var initialItem, lockedItem, list, wrkAss;
    before(function (done) {
      Q.all([
        app.models.WorkflowTemplate.deleteAll(),
        app.models.WorkflowAssociation.deleteAll(),
        app.models.WorkflowInstance.deleteAll(),
        app.models.Post.deleteAll()
      ]).then(function () {
        return Q.all([
          app.models.Post.create({title: 'a post', tags: [1, 2]}),
          app.models.Post.create({title: 'b post', tags: [1, 2], lk_workflow: true}),
          app.models.List.create({id: 'Post', title: 'Post'}),
          app.models.WorkflowAssociation.create({
            list: 'Post',
            workflowTemplateId: 'ApproveWorkflow',
            associatedData: {}
          })
        ])
      }).spread(function (post, lockedPost, model, ass) {
        initialItem = post;
        lockedItem = lockedPost;
        list = model;
        wrkAss = ass;
        done();
      }, function (err) {
        done(err)
      });
    });

    //before(function (done) {
    //  var dataSource = app.dataSources.mysql;
    //  dataSource.automigrate(done);
    //});
    it('should throw workflow lock error', function (done) {
      app.models.WorkflowInstance.initialWorkflow(1, lockedItem, wrkAss)
        .catch(function (err) {
          err.statusCode.should.equal(400);
          should.exist(err);
          done();
        })
    });
    it.only('should update initialItem current instanceId', function (done) {
      app.models.WorkflowInstance.initialWorkflow(1, initialItem, wrkAss)
        .then(function (wrkInst) {
          app.models.Post.findById(initialItem.id).then(function (updatedItem) {
            updatedItem.instanceId.should.equal(wrkInst.id);
            updatedItem.status.should.equal('Pending');
            updatedItem.lk_workflow.should.be.true;
            //updatedItem.lk_update.should.be.true;
            updatedItem.lk_remove.should.be.true;
            done();
          })
        })
        .catch(function (err) {
          console.log(err);
          should.not.exist(err);
          done();
        })
    });
    it('should create instance', function (done) {
      var initialItem;
      Q.all([
        Q.npost(app.models.List, 'create', [{title: 'Post'}]),
        Q.npost(app.models.Workflow, 'create', [{
          title: 'TestWorkflow',
          stateExpression: '../../server/workflow/TestWf'
        }]),
      ]).then(function (result) {
        var list = result[0],
          workflow = result[1];
        initialItem = result[2];
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
    //sleep
  });

});
