/**
 * Created by Administrator on 2014/11/27.
 */
var loopback = require('loopback');

loopback.modelBuilder.mixins.define('Core', require('./core'));
loopback.modelBuilder.mixins.define('TimeStamp', require('./timestamps'));
loopback.modelBuilder.mixins.define('Owner', require('./owner'));
