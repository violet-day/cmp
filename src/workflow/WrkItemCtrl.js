/**
 * Created by 烬云 on 2014/11/6.
 */
angular.module('cmp')
  .controller('WorkflowCtrl', ['$scope', '$state', '$stateParams', 'List', 'WorkflowInstance', 'WorkflowAssociation', 'toastr', 'blockUI',
    function ($scope, $state, $stateParams, List, WorkflowInstance, WorkflowAssociation, toastr, blockUI) {

      $scope.wfAss = WorkflowAssociation.find({
        filter: {
          where: {listId: $stateParams.list},
          include: [
            {
              relation: 'workflowTemplate',
              scope: {
                fields: ['title']
              }
            }
          ]
        }
      });

      $scope.initialWorkflow = function (ass) {
        blockUI.start();
        WorkflowInstance.initialWorkflow({
          association: ass,
          initialItem: {
            id: $stateParams.id,
            title: $stateParams.title,
            __t: $stateParams.list
          }
        }).$promise.then(function (res) {
            toastr.success('流程启动成功');
            blockUI.stop();
            $state.reload();
          }, function (reason) {
            blockUI.stop();
            toastr.error(reason.data.error.message);
          })
      };

      $scope.workflowLog = WorkflowInstance.find({
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
      });
    }])
  .controller('WorkflowStateCtrl', ['$scope', '$stateParams', '$state', 'WorkflowInstance',
    function ($scope, $stateParams, $state, WorkflowInstance) {
      $scope.instance = WorkflowInstance.findOne({
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
      });
      $scope.cancelWorkflow = function (_id) {
        WorkflowInstance.cancel({_id: _id}).$promise.then(function () {
          $state.transitionTo($state.current, $stateParams, {
            reload: true, inherit: true, notify: true
          });
        })
      };
      //$scope.tasks = Task.selector({filter: JSON.stringify({instance: $stateParams.instanceId})});
      //$scope.isAdmin = Group.inGroup({key: 'title', value: 'Administrator'});
      $scope.examine = function (task) {
        $modal.open({
          templateUrl: task.form + '/view.html',
          resolve: {
            _id: function () {
              return task._id;
            }
          },
          controller: 'TaskViewCtrl'
        })
      };
    }])

