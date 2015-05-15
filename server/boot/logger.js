/**
 * Created by Nemo on 15/5/15.
 */
var log4js = require('log4js');

module.exports = function (app) {

  log4js.configure('./server/logger.json',{cwd:process.cwd()})
};
