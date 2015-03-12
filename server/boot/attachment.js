/**
 * Created by Administrator on 2015/1/4.
 */
var fs = require('fs'),
  path = require('path'),
  Q = require('q');
/**
 * 创建附件文件夹
 * @param app
 * @param next
 */
module.exports = function (app, next) {
  //var attachRoot = './attachment';
  //if (!fs.existsSync(attachRoot))fs.mkdirSync(attachRoot);
  //Q.all(Object.keys(app.models).filter(function (modelName) {
  //  return app.models[modelName].settings.base === 'Item';
  //}).map(function (modelName) {
  //  if (!fs.existsSync(path.join(attachRoot, modelName)))fs.mkdirSync(path.join(attachRoot, modelName));
  //})).then(function (result) {
  //  next();
  //}, function (err) {
  //  console.error(err);
  //  next();
  //});
  next();
};
