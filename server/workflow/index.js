/**
 * Created by 烬云 on 2014/11/6.
 */
var fs = require('fs');
var rows = [
  {
    id: 'ApproveWorkflow',
    stateExpression: '/ApproveWorkflow.js'
  }
];

module.exports = rows.map(function (wft) {
  wft.stateExpression = fs.readFileSync(__dirname + wft.stateExpression, 'utf8');
  return wft;
});
