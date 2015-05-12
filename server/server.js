var loopback = require('loopback');
var boot = require('loopback-boot');
var logger = require('morgan');

var app = module.exports = loopback();

require('./mixin');

require('loopback-ds-readonly-mixin')(app);

boot(app, __dirname);

app.start = function () {
  // start the web server
  return app.listen(function () {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}

