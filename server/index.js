var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var loki = require('lokijs')
var db = new loki('messages.json', {
        autosave: true, 
        autosaveInterval: 10000,
        autoload: true, 
        autoloadCallback: loadHandler
});
var messages;

function loadHandler() {
  messages = db.getCollection('messages');
  if (!messages) {
    messages = db.addCollection('messages');
    messages.insert( { message:'Hello World!' } );
    db.saveDatabase()
  }
}

// Gets most recent message
app.get('/', function (req, res) {
  res.json({'message':messages.get(messages.data.length).message});
});

// Adds new message
app.post('/', function(req, res) {
  messages.insert(req.body)
  res.send(201);
});

module.exports = app;