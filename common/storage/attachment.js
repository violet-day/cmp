module.exports = function (Attachment) {
  Attachment.beforeRemote('upload', function (ctx, unused, next) {
    console.log('hook');
    console.log(ctx.req.params);
    next();
  });
  Attachment.beforeRemote('download', function (ctx, unused, next) {
    console.log('hook');
    console.log(ctx.req.params);
    next();
  });
};
