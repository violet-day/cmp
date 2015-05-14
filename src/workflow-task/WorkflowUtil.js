/**
 * Created by 烬云 on 2014/12/14.
 */
/*@ngInject*/
module.exports = function () {
  var util = {};
  util.include = [
    {
      relation: 'owner',
      scope: {
        fields: ['username', 'email']
      }
    },
    {
      relation: 'modifier',
      scope: {
        fields: ['username', 'email']
      }
    },
    {
      relation: 'instance',
      scope: {
        fields: ['workflowState']
      }
    }
  ];


  return util;
};
