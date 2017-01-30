var express = require('express');
var server;
server = express();

server.use('/static', express.static(__dirname+'/static'));
server.use('/user', require('./routes/user'));
server.use('/auth/facebook', require('./routes/facebook'));

module.exports = server;