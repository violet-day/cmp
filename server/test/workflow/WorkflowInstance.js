/**
 * Created by 烬云 on 2014/10/26.
 */

var app = require('../../server'),
  Q = require('q'),
  should = require('should');

describe('WorkflowInstance', function () {

  beforeEach(function () {
    //app.models.WorkflowInstance.deleteAll();
  });
  //todo:测试
  describe('#initialWorkflow', function () {
    var initialItem, lockedItem, list, wrkAss, wft;

    before(function (done) {
      Q(app.models.Post.deleteAll())
        .then(function () {
          return Q.all([
            app.models.Post.create({title: 'a post', tags: [1, 2]}),
            app.models.Post.create({title: 'b post', tags: [1, 2, 3], lk_workflow: true}),
            app.models.List.findOne({id: 'Post'}),
            app.models.WorkflowTemplate.findOne({id: 'ApproveWorkflow'}),
            app.models.WorkflowAssociation.findOne({listId: 'Post', workflowTemplateId: 'ApproveWorkflow'})
          ])
        }).spread(function (post, lockedPost, model, workflowTemplate, ass) {
          initialItem = post;
          lockedItem = lockedPost;
          list = model;
          wft = workflowTemplate;
          wrkAss = ass;
          done();
        }, function (err) {
          done(err)
        });
    });

    it('should throw workflow lock error', function (done) {
      app.models.WorkflowInstance.initialWorkflow(1, lockedItem, wrkAss)
        .catch(function (err) {
          err.statusCode.should.equal(400);
          should.exist(err);
          done();
        })
    });
    it('should update initialItem', function (done) {
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
          should.not.exist(err);
          done();
        })
    });


    after(function (done) {
      app.models.WorkflowInstance.find()
        .then(function (wfInts) {
          done()
        })
    })
  });

  describe('#', function () {
    //sleep
  });

  describe.skip('multi create', function () {
    it('', function (done) {
      app.models.Post.deleteAll()
        .then(function () {
          return Q.all([
            app.models.Post.create({title: 'a post', tags: [1, 2]}),
            app.models.Post.create({title: 'b post', tags: [1, 2, 3], lk_workflow: true}),
          ])
        })
        .then(function (result) {
          console.log(result);
          done()
        }, function (err) {
          done(err);
        })
    })
  })

});
