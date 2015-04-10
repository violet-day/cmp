/**
 * Created by 烬云 on 2014/11/5.
 */
var Q = require('q'),
  _ = require('lodash'),
  colMap = require('../columns'),
  workflowMap = require('../workflow'),
  app = require('./../server');

module.exports = Q.spawn(function *() {
  yield [
    app.models.ColumnDef.deleteAll(),
    app.models.List.deleteAll(),
    app.models.View.deleteAll(),
    app.models.WorkflowTemplate.deleteAll(),
    app.models.WorkflowAssociation.deleteAll()
  ];
  console.log('rest done');
  yield [
    app.models.ColumnDef.create(colMap),
    app.models.WorkflowTemplate.create( _.keys(workflowMap).map(function (wf) {
      return {
        id: wf,
        title: wf
      }
    }))
  ];
  console.log('create ColumnDef && Workflow done');

  yield _.values(app.models).map(function (model) {
    return app.models.List.publish(model);
  });
  console.log('publish list done');
});

