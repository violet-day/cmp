/**
 * Created by Administrator on 2014/10/23.
 */

module.exports = function (Person) {

  Person.greet = function (msg, cb) {
    var err = new Error('test');
    err.status = 400;
    cb(err, 'Greetings... ' + msg);
  };

  Person.remoteMethod(
    'greet',
    {
      accepts: {arg: 'msg', type: 'string'},
      returns: {arg: 'greeting', type: 'string'}
    }
  );
};
