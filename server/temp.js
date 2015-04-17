/**
 * Created by Administrator on 2014/10/27.
 */
var state = require('state'),
  _ = require('lodash'),
  co = require('co'),
  Q = require('q'),
  assert = require('assert')
//app = require('./server');

var should = require('should');

function Mover() {
}
state(Mover.prototype, {

  // Programmatically set up the root to log the transitional
  // events of all states
  //construct: function () {
  //  var events, substates, i, j;
  //  events = ['depart', 'exit', 'enter', 'arrive'];
  //  substates = [this].concat(this.substates(true));
  //  for (i in substates) {
  //    for (j in events) {
  //      ( function (s, e) {
  //        s.on(e, state.bind(function () {
  //          console.log(this.name + " " + e);
  //        }));
  //      }(substates[i], events[j]) );
  //    }
  //  }
  //},

  Idle: state({
    enter: function () {
      this.state().go('Stationary.Alert');
    }
  }),
  Alert: state({
    enter: function () {
      console.log('Alert');
    }
  }),
  Moving: {
    Walking: state,
    Running: {
      Sprinting: state
    }
  },

  transitions: {
    Announcing: {
      source: 'Idle', target: 'Alert',
      action: state.bind(function () {
        var name = this.superstate.name || "the root";
        this.end("action of transition is at " + name);
      }),
      end: function (message) {
        console.log(message);
      }
    }
  }
});


var m = new Mover();
console.log(m.state().name);
m.state().go('Idle1', {
  success: function () {
    console.log('success');
    //console.log(this);
  },
  failure: function () {
    console.log('failure');
  }
});
// log <<< "depart Idle"
// log <<< "exit Idle"
// log <<< "action of transition is at Stationary"
// log <<< "enter Alert"
// log <<< "arrive Alert"

//m.state().go('TTT', {
//  success: function () {
//    console.log('success');
//  },
//  failure:function(){
//    console.log('failure');
//  }
//});
// log <<< "depart Alert"
// log <<< "exit Alert"
// log <<< "exit Stationary"
// log <<< "action of transition is at the root state"
// log <<< "enter Moving"
// log <<< "enter Running"
// log <<< "enter Sprinting"
// log <<< "arrive Sprinting"
