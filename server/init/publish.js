/**
 * Created by 烬云 on 2014/11/5.
 */
var Q = require('q'),
  co = require('co'),
  _ = require('lodash'),
  colMap = require('../columns'),
  workflowMap = require('../workflow'),
  app = require('./../server');

module.exports = co.wrap(function *() {
  yield [
    Q.ninvoke(app.models.ColumnDef, 'deleteAll'),
    Q.ninvoke(app.models.List, 'deleteAll'),
    Q.ninvoke(app.models.View, 'deleteAll'),
    Q.ninvoke(app.models.WorkflowTemplate, 'deleteAll'),
    Q.ninvoke(app.models.WorkflowAssociation, 'deleteAll')
  ];
  console.log('rest done');
  yield [
    Q.ninvoke(app.models.ColumnDef, 'create', colMap),
    Q.ninvoke(app.models.WorkflowTemplate, 'create', _.keys(workflowMap).map(function (wf) {
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

