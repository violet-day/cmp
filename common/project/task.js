/**
 * Created by 烬云 on 2014/11/6.
 */
var _ = require('lodash');
module.exports = function (Task) {
  Task.validatesInclusionOf('status', {in: ['Pending', 'Progressing', 'Completed', 'Closed']});
};
