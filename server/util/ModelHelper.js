/**
 * Created by 烬云 on 2014/12/17.
 */
var app = require('../server'),
  _ = require('lodash'),
  fs = require('fs'),
  loopback = require('loopback'),
  util = require('util');
var ModelHelper = {},

  excludeProp = ['id', '_id',

    //'created', 'ownerId', 'modified', 'modifierId',
    'instanceId', 'moderationComments', '__t',
    'lk_update', 'lk_remove', 'lk_workflow'
  ],
  excludeRelation = ['instance', 'comments', 'owner', 'modifier'];

exports._capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
/**
 * 根据列定义生成formCtrl
 * @param def
 * @returns {string}
 */
exports.buildFormControl = function (def) {
  var temp = {attrs: []};
  var name = def.name;
  if (name === 'remark')return def.formControl = '<textarea class="form-control" name="remark" id="remark" cols="30" rows="3" ng-model="doc.remark"></textarea>';
  temp.field = def.name;
  temp.displayName = def.description;
  temp.attrs.push(util.format('class="%s"', 'form-control'));
  temp.attrs.push(util.format('id="%s"', temp.field));
  temp.attrs.push(util.format('name="%s"', temp.field));
  temp.attrs.push(util.format('ng-model="doc.%s"', temp.field));
  if (def.required) temp.attrs.push('required');

  if (def.type === 'String') {
    //input:text
    temp.attrs.push('ui-message');
    def.formControl = util.format('<input type="text" %s/>', temp.attrs.join(' '));
  } else if (def.type === 'Date') {
    //todo:确定时间类型的控件模版
    def.cellFilter = 'date:"yyyy-MM-dd HH:mm"';
    def.width = 140;
  } else if (def.type === 'Boolean') {
    //input:checkbox
    def.cellTemplate = util.format('<input type="checkbox" ng-checked="doc.%s" disabled/>', def.name);
    def.formControl = util.format('<input type="checkbox" %s bs-switch/>', temp.attrs.join(' '));
  } else if (def.type === 'Number' && name.indexOf('Id') !== -1) {
    //select:with selector
    temp.capitalizedName = exports._capitalize(name.replace('Id', ''));
    temp.attrs.push(util.format('selector="{service:\'%s\',filter:{fields:[\'id\',\'title\']}}"', temp.capitalizedName));
    temp.attrs.push('ui-message');
    def.cellTemplate = util.format('<div class="ui-grid-cell-contents"><a href title-link="row.entity.%s"></a></div>', name.replace('Id', ''));
    def.formControl = util.format('<ui-select %s>' +
    '<ui-select-match allow-clear="true">{{$select.selected.title}}</ui-select-match>' +
    '<ui-select-choices repeat="item.id as item in %sSelector | filter: $select.search">' +
    '<div ng-bind-html="item.title | highlight: $select.search"></div>' +
    '</ui-select-choices>' +
    '</ui-select>', temp.attrs.join(' '), temp.capitalizedName);
  }
};
/**
 * 根据模型名称创建columns.json
 * @param modelsName
 * @param cb
 */
exports.buildColumns = function (modelsName, cb) {
  var definition = app.models[modelsName].definition,
    name = definition.name,
    properties = definition.properties,
    relations = definition.settings.relations;

  var columns = _.reduce(properties, function (memo, value, key) {

    if (excludeProp.indexOf(key) === -1) {
      var col = {
        title: [name, key].join(':'),
        name: key,
        type: value.type.name,
        displayName: value.description || exports._capitalize(key).replace('Id', '')
      };
      exports.buildFormControl(col);
      memo.push(col);
    }
    return memo;
  }, []);
  fs.writeFile('./cols.json', JSON.stringify(columns), cb);
};

exports.form = function (modelName) {
  var columns = require('../columns'),
    app = require('../server'),
    defCols = app.models[modelName].definition.settings.columns,
    excludeCol = [
      'core:created',
      'core:ownerId',
      'core:modified',
      'core:modifierId'
    ],
    defColumns = defCols.filter(function (col) {
      return excludeCol.indexOf(col) === -1;
    }).map(function (col) {
      var dCol = _.find(columns, {title: col});
      if (!dCol)return console.error(col);
      return dCol;
    });

  if (app.models[modelName].definition.settings.description)description = app.models[modelName].definition.settings.description;

  if (!fs.existsSync('./' + modelName))fs.mkdirSync('./' + modelName);
  fs.writeFile('./' + modelName + '/New.html', loopback.template('./template/New.ejs')({
    modelName: description || modelName,
    columns: defColumns
  }));
  fs.writeFile('./' + modelName + '/Edit.html', loopback.template('./template/Edit.ejs')({
    modelName: description || modelName,
    columns: defColumns
  }));
  fs.writeFile('./' + modelName + '/View.html', loopback.template('./template/View.ejs')({
    modelName: description || modelName,
    columns: defColumns
  }));
};

exports.ctrl = function (modelName) {
  fs.writeFile('./' + modelName + 'Ctrl.js', loopback.template('./template/Ctrl.ejs')({
    modelName: modelName
  }));
};
