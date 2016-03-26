var express = require('express');
var app = express();
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

module.exports = app;