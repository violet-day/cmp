/**
 * Created by 烬云 on 2014/12/14.
 */
angular.module('cmp')
.factory('WorkflowTaskUtil', [function () {
  return {
    include: [
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
        relation: 'workflowAssociation',
        scope: {
          fields: ['title']
        }
      },
      {
        relation: 'instance',
        scope: {
          fields: ['workflowState']
        }
      },
    ]
  }
}])
