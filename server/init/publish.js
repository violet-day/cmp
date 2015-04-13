/**
 * Created by 烬云 on 2014/11/5.
 */
var Q = require('q'),
  _ = require('lodash'),
  colMap = require('../columns'),
  workflowMap = require('../workflow'),
  app = require('./../server');

module.exports = Q.async(function *() {
  yield [
    app.models.ColumnDef.deleteAll(),
    app.models.List.deleteAll(),
    app.models.View.deleteAll(),
    app.models.WorkflowTemplate.deleteAll(),
    app.models.WorkflowAssociation.deleteAll()
  ];
  console.log('rest done');
  yield app.models.ColumnDef.create(colMap);

  console.log('create ColumnDef done');

  yield app.models.WorkflowTemplate.create(workflowMap);

  console.log('create Workflow done');

  yield _.values(app.models).map(function (model) {
    return app.models.List.publish(model);
  });
  console.log('publish list done');
});

