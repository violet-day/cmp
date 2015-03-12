/**
 * Created by Administrator on 2014/10/24.
 */
var uuid = require('uuid'),
  loopback = require('loopback'),
  Q = require('q'),
  _ = require('lodash'),
  debug = require('debug')('core:Item');

module.exports = function (Item) {

  //<editor-fold desc="validate">
  Item.validatesInclusionOf('status', {in: ["Draft", "Approved", "Rejected", "Pending", "Planed"]});

  //</editor-fold>

  Item.prototype.workflowInitialPrepartion = {
    ApproveWorkflow: function (instance) {
      debug('#workflowInitialPrepartion %d', instance.id);
      return Q('pre approve workflow');
    }
  };


};
