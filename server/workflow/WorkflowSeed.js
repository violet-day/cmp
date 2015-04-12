/**
 * Created by Nemo on 15/4/11.
 */
var state = require('state');

module.exports = {
  errorHandler: state.bind(function (err) {
    console.error(err);
    //this.logs.create({body: err.stack, type: 'Error'});
  })
};
