/**
 * Created by 烬云 on 2014/11/1.
 */

module.exports = [
  //<editor-fold desc="Core">
  {
    title: 'core:title',
    type: 'string',
    displayName: 'Title',
    cellTemplate: '<div class="ui-grid-cell-contents"><a href title-link="row.entity"></a></div>'
  },
  {
    title: 'core:created',
    type: 'date',
    displayName: 'Created',
    cellFilter: 'date:"yyyy-MM-dd HH:mm"'
  },
  {
    name: 'core:ownerId',
    type: 'object',
    displayName: 'Creator',
    cellTemplate: '<div class="ui-grid-cell-contents"><a href title-link="{title:row.entity.owner.username,__t:\'User\',id:row.entity.ownerId}"></a></div>'
  },
  {
    title: 'core:modified',
    type: 'date',
    displayName: 'Modified',
    cellFilter: 'date:"yyyy-MM-dd HH:mm"'
  },
  {
    title: 'core:modifierId',
    type: 'object',
    displayName: 'Modifier',
    cellTemplate: '<div class="ui-grid-cell-contents"><a href title-link="{title:row.entity.modifier.username,__t:\'User\',id:row.entity.modifierId}"></a></div>'
  },
  {
    title: 'core:status',
    type: 'string',
    displayName: 'Status'
  },
  {
    title: 'core:username',
    type: 'string',
    displayName: 'Username'
  },
  //</editor-fold>

  {
    title: 'project:assignTo',
    type: 'string',
    displayName: 'AssignTo',
    cellTemplate: '<div class="ui-grid-cell-contents"><a href title-link="row.entity.assignTo"></a></div>'
  },
  {
    title: 'project:startDate',
    displayName: 'StartDate',
    type: 'date',
    cellFilter: 'date:"yyyy-MM-dd HH:mm"'
  },
  {
    title: 'workflow:instanceId',
    type: 'number',
    displayName: 'Workflow Instance',
    cellTemplate: '<div class="ui-grid-cell-contents"><a ui-sref="main.wrkStat({workflow:row.entity.workflowAssociation.title,instanceId:row.entity.instanceId})" ng-bind="row.entity.instance.workflowState"></a></div>'
  },
  {
    title: 'workflow:workflowAssociationId',
    type: 'number',
    displayName: 'Workflow Association',
    cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.workflowAssociation.title}}</div>'
  },
  {
    title: 'workflow:outcome',
    type: 'string',
    displayName: 'Outcome',
    cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.outcome}}</div>'
  }

];
