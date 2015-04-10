/**
 * Created by Administrator on 2014/11/26.
 */
var debug = require('debug')('mixin:timestamps');

module.exports = function (Model, option) {
  Model.defineProperty('created', {
    type: Date, default: function () {
      return new Date();
    }
  });
  Model.defineProperty('modified', {type: Date,default:function(){
    return new Date();
  }});
  Model.observe('before save', function (ctx, next) {

    if(ctx.data){
      ctx.data.modified=new Date();
    }else if(ctx){

    }
    next();
  });
};
