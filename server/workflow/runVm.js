/**
 * Created by Nemo on 15/4/11.
 */
var state = require('state');
var util = require('util');
var vm = require('vm');
var fs = require('fs');
var script = fs.readFileSync(process.cwd() + '/ApproveWorkflow.js', 'utf8');

try {
  var initSandbox = {
    console: console,
    require: require,
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    setInterval: setInterval,
    clearInterval: clearInterval,
    global: global,
    process: process,
    module: module,
    app: {}
  };

  var context = vm.createContext(initSandbox);
  var stateExpression = vm.runInContext(script, context);

var instance={intenalState:'Initial'};
  state(instance, stateExpression);
  instance.state().go('Initial');

  //console.log(stateExpression);

} catch (ex) {
  console.log(ex);
}
