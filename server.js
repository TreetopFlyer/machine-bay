var express = require('express');
var server;
server = express();

server.use('/static', express.static(__dirname+'/static'));
server.use('/user', require('./routes/users'));

module.exports = server;