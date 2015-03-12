/**
 * Created by Administrator on 2014/12/11.
 */
module.exports = function (app) {
  app.models.RoleMapping.defineProperty('principalTitle', {type: String,required:true})
};
