var express = require('express');
var server;
server = express();
server.use('/static', express.static(__dirname+'/static'));
module.exports = server;