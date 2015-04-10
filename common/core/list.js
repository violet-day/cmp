/**
 * Created by 烬云 on 2014/11/6.
 */
var Q = require('q'),
  _ = require('lodash');

module.exports = function (List) {
  List.publish = function (model) {
    return Q.async(function *() {
      var definition = model.definition,
        app = List.app,
        coreCol = [
          'core:title', 'core:modified', 'core:modifierId'
        ],
        list = yield List.create({id: definition.name, title: definition.name}),
        wfMap = yield List.app.models.WorkflowTemplate.find(),
        colMap = yield List.app.models.ColumnDef.find();

      if (!definition.settings.wfAss) definition.settings.wfAss = [];
      if (!definition.settings.views) definition.settings.views = [];
      if (!definition.settings.columns) definition.settings.columns = [];

      var columns = coreCol.concat(definition.settings.columns).map(function (id) {
        var col = _.find(colMap, {id: id});
        if (!col)console.error(title + ' not found');
        return col;
      });
      return yield [
        app.models.View.create(definition.settings.views.concat([
            {
              title: 'AllItems',
              listId: list.id,
              principalType: 'ROLE',
              principalId: '$everyone',
              columns: columns
            },
            {
              title: 'MyItems',
              listId: list.id,
              principalType: 'ROLE',
              principalId: '$everyone',
              columns: columns
            }])
        ),
        Q.all(
          definition.settings.wfAss.map(function (ass) {
            ass.workflowTemplateId = _.find(wfMap, {title: ass.workflow}).id;
            ass.listId = list.id;
            console.log(ass);
            return app.models.WorkflowAssociation.create(ass);
          })
        )
      ];
    })();
  };

  var columnsDef = require('../../server/columns');
  List.debugColDef = function (modelName, cb) {
    var columns = List.app.models[modelName].definition.settings.columns;
    cb(null, columns.map(function (col) {
      return _.find(columnsDef, {title: col});
    }));
  };

  List.remoteMethod('debugColDef', {
    description: '获取列定义',
    accepts: [
      {
        arg: 'modelName', type: 'string', required: true,
        description: '模型'
      }
    ],
    returns: {arg: 'columns', type: 'array', root: true}
  });

};
