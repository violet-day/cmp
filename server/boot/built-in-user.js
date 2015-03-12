/**
 * Created by Administrator on 2014/12/11.
 */
module.exports = function (app) {
  var User = app.models.User;
  User.defineProperty('firstName', {type: String, description: '姓'});
  User.defineProperty('lastName', {type: String, description: '名'});
  User.defineProperty('initial', {type: String, description: '简称'});
  User.defineProperty('displayName', {type: String, description: '昵称'});
  User.defineProperty('office', {type: String, description: '办公室'});
  User.defineProperty('telephones', {type: [String], description: '联系电话'});

  User.defineProperty('sex', {type: String, description: '性别'});
  User.defineProperty('birthday', {type: Date, description: '生日'});
  User.defineProperty('address', {type:String, description: '居住地址'});
  User.defineProperty('hometown', {type: String, description: '家乡'});

  User.defineProperty('company', {type: String, description: '公司'});
  User.defineProperty('department', {type: String, description: '部门'});
  User.defineProperty('job', {type: String, description: '职务'});

  User.defineProperty('forceRestPwd', {type: Boolean, default: false});
  User.defineProperty('status', {type: Boolean, default: false});

  User.belongsTo('manager', {model: 'User', foreignKey: 'managerId', description: '经理'});

  User.mixin('Core');
  User.mixin('TimeStamp');
  User.mixin('Owner');

  User.definition.columns = [
    //{group:'core',name:'username'}
  ];
  //User.pre('_save', function (next, data) {
  //  data.title = data.username;
  //  next();
  //});
};
