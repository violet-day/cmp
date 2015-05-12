/**
 * Created by Nemo on 15/5/12.
 */
/*@ngInject*/
module.exports = function ($stateProvider) {
  $stateProvider
    .state('main.wrkSetting', {
      url: '/wrkSetting/:list',
      templateUrl: 'views/list/wrkSetting.html',
      controller: 'WorkflowSettingCtrl',
      resolve: {
        /*@ngInject*/
        associations: function ($stateParams, WorkflowAssociation) {
          return WorkflowAssociation.find({
            filter: {
              where: {listId: $stateParams.list},
              include: [
                {
                  relation: 'workflowTemplate',
                  scope: {
                    fields: ['title']
                  }
                },
                {
                  relation: 'instances'
                }
              ]
            }
          }).$promise;
        }
      },
      ncyBreadcrumb: {
        parent: 'main.listSetting',
        label: 'Workflow Setting'
      }
    })
    .state('main.addWrk', {
      url: '/addWrk/:list',
      templateUrl: 'views/workflow/addWrk.html',
      controller: 'AddWrkCtrl',
      ncyBreadcrumb: {
        parent: 'main.wrkSetting',
        label: 'Add Workflow'
      }
    })
    .state('main.wrkAss', {
      url: '/wrkAss/:list/:ass/:wft',
      templateUrl: function ($stateParams) {
        return 'views/workflow-associate/' + $stateParams.wft + '.html';
      },
      controllerProvider: function ($stateParams) {
        return $stateParams.wft + 'AssCtrl';
      },
      ncyBreadcrumb: {
        parent: 'main.wrkSetting',
        label: 'Set Workflow Association Data'
      }
    })
    .state('main.workflow', {
      url: '/workflow/:list?id&title',
      templateUrl: 'views/workflow/workflow.html',
      controller: 'WorkflowCtrl',
      resolve: {
        /*@ngInject*/
        wfAss: function ($stateParams, WorkflowAssociation) {
          return WorkflowAssociation.find({
            filter: {
              where: {listId: $stateParams.list},
              include: [
                {
                  relation: 'workflowTemplate',
                  scope: {
                    fields: ['id']
                  }
                }
              ]
            }
          }).$promise;
        },
        workflowLog: function ($stateParams, WorkflowInstance) {
          return WorkflowInstance.find({
            filter: {
              fields: ['id', 'created', 'workflowState', 'workflowAssociationId'],
              where: {
                workflowList: $stateParams.list,
                workflowItemId: $stateParams.id
              },
              include: [
                {
                  relation: 'workflowAssociation',
                  scope: {
                    fields: ['title']
                  }
                }
              ]
            }
          }).$promise;
        }
      },
      ncyBreadcrumb: {
        parent: 'main.list',
        label: '{{ $stateParams.title }}'
      }
    })
    .state('main.wrkStat', {//工作流历史界面
      url: '/WrkStat/:workflow/:instanceId',
      templateUrl: 'views/workflow/wrkStat.html',
      controller: 'WorkflowStateCtrl',
      resolve: {
        /*@ngInject*/
        instance: function ($stateParams, WorkflowInstance) {
          return WorkflowInstance.findOne({
            where: {
              id: $stateParams.instanceId
            },
            filter: {
              include: [
                {
                  relation: 'initiator',
                  scope: {
                    fields: ['username', 'email']
                  }
                },
                {
                  relation: 'workflowAssociation',
                  scope: {
                    fields: ['title']
                  }
                }
              ]
            }
          })
        }
      },
      ncyBreadcrumb: {
        label: 'Workflow State : {{ $stateParams.workflow }}'
      }
    })
}
