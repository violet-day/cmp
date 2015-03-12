/**
 * Created by Administrator on 2014/12/29.
 */
var fs = require('fs');
var files = fs.readdirSync(__dirname);
var columns = files.reduce(function (memo, file) {
  if (file !== 'index.js') {
    memo = memo.concat(require(__dirname + '/' + file));
  }
  return memo;
}, []);
module.exports = columns;
