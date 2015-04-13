/**
 * Created by 烬云 on 2014/10/26.
 */
var state = require('state'),
  Q = require('q'),
  _ = require('lodash'),
  vm = require('vm'),
  logger = require('log4js').getLogger('WorkflowInstance'),
  wfs = require('../../server/workflow');

module.exports = function (WorkflowInstance) {

  /**
   * 启动工作流
   * @param {any} initiator 流程启动者
   * @param {object} initialItem 流程启动项
   *  @property {string}  initialItem.__t 流程启动项对应的模型
   *  @property {any}  initialItem.id  流程启动项目id
   *  @property {string}  initialItem.title  流程启动项目标题
   * @param {object} association
   *  @property {any} association.id 工作流关联id
   *  @property {object}  association.associatedData  工作流关联数据
   * @param cb
   * @returns {promise}
   */
  WorkflowInstance.initialWorkflow = function (initiator, initialItem, association, cb) {
    return Q.async(function *() {
      var app = WorkflowInstance.app;
      initialItem = yield app.models[initialItem.__t].findById(initialItem.id);
      if (initialItem.lk_workflow) {
        logger.info('initialItem: %s.%d has been locked', initialItem.__t, initialItem.id);
        var err = new Error('Workflow Locked');
        err.statusCode = 400;
        throw err;
      }
      var wft = yield app.models.WorkflowTemplate.findById(association.workflowTemplateId);
      var instance = yield WorkflowInstance.create({
        initiatorId: initiator,
        workflowList: initialItem.__t,
        workflowItemId: initialItem.id,
        workflowItemTitle: initialItem.title,
        workflowTemplateId: association.workflowTemplateId,
        stateExpression: wft.stateExpression,
        workflowAssociationId: association.id,
        associatedData: association.associatedData
      });
      logger.info('initialItem %s.%d created success', instance.__t, instance.id);
      yield initialItem.updateAttributes({
        instanceId: instance.id,
        status: 'Pending',
        lk_workflow: true,
        //todo:确定是否更新
        //lk_update: true,
        lk_remove: true
      });
      logger.info('%s.%s updateAttributes success', initialItem.__t, initialItem.id);
      var stateExpression = yield instance._stateExpression();
      state(instance, stateExpression);
      instance.state().go('Initial');
      return instance;
    })().nodeify(cb);
  };

  WorkflowInstance.prototype._stateExpression = function () {
    var self = this;
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
        app: self.constructor.app
      };
      var context = vm.createContext(initSandbox);
      var stateExpression = vm.runInContext(self.stateExpression, context);
      return Q(stateExpression);
    } catch (err) {
      return Q.reject(err);
    }
  };

  /**
   * 钝化至数据库
   */
  WorkflowInstance.prototype.sleep = function () {
    var self = this;
    logger.info('id:%d sleep with state [%s]', self.id, self.state().name);
    self.internalState = self.state().name;
    self.isWake = false;
    //self.emit('sleep:' + self.state().name);
    return self.save();
  };
  /**
   * 从数据库中取消持久化，并且传入任务
   * @param task
   */
  WorkflowInstance.prototype.wakeUp = function (task) {
    //var self = this;
    //state(self, wfs[self.workflowTemplateId]);
    //var currentState = self.state(self.internalState);
    //logger.info('%d wake up in %s with task#%d pre call %s', self.id, self.internalState, task.id,task.changedMethod);
    //if (currentState) {
    //  if (currentState.hasMethod(task.changedMethod)) {
    //    self.state(self.internalState).call(task.changedMethod, task);
    //  } else {
    //    yield Q.ninvoke(self.logs, 'create', ({type: 'Error', body: 'Method ' + task.changedMethod + ' Not Found'}));
    //  }
    //} else {
    //  yield Q.ninvoke(self.logs, 'create', ({type: 'Error', body: 'State ' + task.changedMethod + ' Not Found'}));
    //}
  };
//<editor-fold desc="InitialItem">
  /**
   * 得到流程启动项目
   * @returns {Promise}
   */
  WorkflowInstance.prototype.initialItem = function (filter) {
    var self = this;
    return Q.ninvoke(WorkflowInstance.app.models[self.workflowList], 'findOne', _.defaults({id: self.workflowItemId}, filter || {}));
  };

  /**
   * 更新流程启动项目
   * @param data
   * @returns {Promise}
   */
  WorkflowInstance.prototype.updateInitialItem = function () {
    return WorkflowInstance.app.models[self.workflowList].updateAttributes.apply(null, arguments);
  };

  /**
   * @description 设置工作流锁
   * @param toggle
   * @returns {Promise}
   */
  WorkflowInstance.prototype.toggleWorkflowLock = function (toggle) {

  };
//</editor-fold>

//<editor-fold desc="Task">
  /**
   * 分配任务
   * @param task
   * @returns {*}
   */
  WorkflowInstance.prototype.assignTask = Q.async(function *(task) {
    var self = this;
    var createdTask = yield WorkflowInstance.app.models[task.modelTo || 'WorkflowTask'].create(_.defaults({
      startDate: new Date(),
      creator: self.initiator,
      workflowAssociationId: self.workflowAssociationId,
      instanceId: self.id
    }, task));
    yield self.logs.create({type: 'Task Created', body: task.title});
    return Q(createdTask);
  });
  /**
   * 将当前工作流实例中还没有完成的任务标记为废弃
   * @returns {*|Promise|Array|{index: number, input: string}}
   */
  WorkflowInstance.prototype.disuseTask = function () {
    return mongoose.model('Task').update({
      instance: _id,
      status: {$ne: 'TASK_COMPLETED'}
    }, {
      $set: {
        'status': 'TASK_DISUSED',
        'lock.update': true
      }
    }, {multi: true}).exec();
  };
  /**
   * 删除工作流实例关联的任务
   * @returns {*|Promise|Array|{index: number, input: string}}
   */
  WorkflowInstance.prototype.dropTask = function () {
    var self = this;
    return mongoose.model('Task').remove({
      instance: self._id
    }).exec();
  };
//</editor-fold>


//<editor-fold desc="审批">
  /**
   * 设置审批状态
   * @param status
   * @returns {Promise}
   */
  WorkflowInstance.prototype.setModerationStatus = function (status) {
    var self = this;
    self.notifyInitiator(status);
    return mongoose.model(self.initialItem.model).findByIdAndUpdate(self.initialItem._id, {'moderation.status': status}).exec();
  };
  /**
   * 添加批注
   * @param task
   * @returns {Promise}
   */
  WorkflowInstance.prototype.pushModerationComment = function (task) {
    var self = this;
    if (task.lastModifier && task.remark) {
      return mongoose.model(self.initialItem.model).findByIdAndUpdate(self.initialItem._id, {
        $push: {
          'moderation.log': {
            user: task.lastModifier,
            body: task.remark || ''
          }
        }
      }).exec();
    }
  };
//</editor-fold>


  /**
   * 结束工作流
   */
  WorkflowInstance.prototype.finishWorkflow = function () {
    var self = this;
    return self.toggleWorkflowLock(false).then(function () {
      self.workflowState = 'FINISHED';
      self.internalState = 'Final';
      self.completeAt = new Date();
      self.save();
    });
  };
  /**
   * @description 取消工作流;更新工作流实例状态;删除相关联的任务;取消流程启动项的工作流锁定
   * @param _id
   * @returns {Promise|*}
   */
  WorkflowInstance.cancelWorkflow = function (_id) {
    var instance;
    return mongoose.model('Instance').findByIdAndUpdate(_id, {
      workflowState: 'CANCELED',
      completeAt: new Date()
    }).exec().then(function (i) {
      instance = i;
      state(instance, instance.stateExpression());
      instance.state().go('Cancel');
      return instance.dropTask();
    }).then(function () {
      return instance.toggleWorkflowLock(false)
    });
  };

  /**
   * 取消工作流
   * TODO:待确定
   */
  WorkflowInstance.cancelWorkflow1 = function () {
    var self = this;
    state(self, self.stateExpression());
    self.state().go('Cancel');
  };
  /**
   * 取消工作流
   * @returns {Promise|*}
   */
  WorkflowInstance.prototype.preCancelWorkflow = function () {
    var self = this;
    //将与当前工作流实例相关的任务中还没有完成的任务标记为已废弃
    return mongoose.model('Task').update({
      instance: self._id,
      status: {$ne: 'TASK_COMPLETED'}
    }, {
      $set: {
        'status': 'TASK_DISUSED',
        'lock.update': true
      }
    }, {multi: true}).exec()
      .then(function () {
        self.workflowState = 'CANCELED';
        self.internalState = 'Cancel';
        self.completeAt = new Date();
        return self.save();
      });
  };

  WorkflowInstance.prototype.notifyInitiator = function (result) {
    var self = this;
    mongoose.model('User')
      .findById(self.initiator)
      .select('title general')
      .exec()
      .then(function (user) {
        fs.readFile('./mail/workflowNotify.html', function (err, html) {
          if (err)return console.log(err);
          var content = _.template(html.toString())({
            initialItem: self.initialItem,
            initiator: user,
            url: 'http://' + config.domain + '/#/WrkStat/' + self._id,
            result: result
          });
          var mailOptions = {
            from: config.mail.from,
            to: user.general.email,
            subject: 'Workflow Notify',
            html: content // html body
          };
          mailer(mailOptions);
        });
      })
      .then(null, function (err) {
        console.log(err);
      })
  };
  /**
   * 通知用户
   * @param group
   * @param content
   */
  WorkflowInstance.prototype.notify = function (group, content) {
    return mongoose.model('Group')
      .findOne({title: group})
      .populate('users', 'title general')
      .exec()
      .then(function (g) {
        g.users.forEach(function (u) {
          fs.readFile('./mail/notify.html', function (err, html) {
            if (err)return console.log(err);
            var body = _.template(html.toString())({
              user: u.title,
              content: content
            });
            var mailOptions = {
              from: config.mail.from,
              to: u.general.email,
              subject: 'System Notify',
              html: body // html body
            };
            mailer(mailOptions);
          });
        })
      })
  };

  WorkflowInstance.prototype.resolveTasks = function () {
    var instance = this;
    return Q.npost(Task, 'resolveChild', [])
      .then(function (subModels) {
        return Q.all(subModels.map(function (subMode) {
          return Q.npost(app.models[subMode], 'find', {where: {workflowInstanceId: instance.id}})
        }))
      })
  };

  //remoteMethod

  WorkflowInstance.remoteMethod('initialWorkflow', {
    description: '启动工作流',
    accepts: [
      {
        arg: 'initiator', type: 'number', required: true,
        http: function (ctx) {
          return ctx.req.accessToken.userId;
        },
        description: '流程启动者'
      },
      {
        arg: 'initialItem', type: 'object', required: true, description: '流程启动项'
      },
      {
        arg: 'association', type: 'object', required: true, description: '工作流关联'
      }
    ],
    returns: {arg: 'instance', type: 'object', root: true}
  });
};
