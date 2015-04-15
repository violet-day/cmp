/**
 * Created by 烬云 on 2014/11/6.
 */
var fs = require('fs');
var path = require('path');
var rows = [
  {
    id: 'ApproveWorkflow',
    stateExpression: '/ApproveWorkflow.js'
  }
];

module.exports = rows.map(function (wft) {
  wft.script = fs.readFileSync(path.join(__dirname, wft.stateExpression), 'utf8');
  return wft;
  //return {
  //  id:wft.id
  //}
});
