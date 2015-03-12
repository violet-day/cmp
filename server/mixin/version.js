/**
 * Created by Administrator on 2014/11/27.
 */

module.exports = function (Model, option) {
  Model.defineProperty('__v', {
    type: 'number', length: 36, default:1
  });
  Model.pre('_update', function (next, data) {
    data.__v += 1;
    next();
  });
  Model.post('_save', function (next) {
    var doc=this;
    doc.incVersion()
      .then(function (result) {
        next();
      })
      .then(null, function (err) {
        next(err);
      });
  });
  Model.prototype.incVersion = function () {
    var doc = this;
    return Q.ninvoke(Item.app.models.VersionPool, 'create', {
      _id: doc._id,
      refTitle: doc.title,
      modelTo: doc.__t,
      version: doc.__v,
      body: doc,
      modifierId: doc.modifierId
    });
  };
};
