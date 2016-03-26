var express = require('express');
var app = express();

var messages = ['Hello World!'];

app.get('/', function (req, res) {
  var message = messages[0];
  res.json({'message':message});
});

module.exports = app;