
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var about = require('./routes/about');
var soundtest = require('./routes/soundtest');
//var addEnvironment = require('./routes/addEnvironment');
var equipment = require('./routes/equipment');
var environment = require('./routes/environment');
var community = require('./routes/community');
var EditEnv=require('./routes/EditEnv');
//var toAddEquipment=require('./routes/toAddEquipment');
var EditEquip=require('./routes/EditEquip');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/equipment', equipment.view);
app.get('/about', about.view);
app.get('/community', community.view);
app.get('/environment', environment.view);
app.get('/soundtest', soundtest.view);
app.get('/addEnv', EditEnv.addEnv);
app.get('/addingEnv',EditEnv.addingEnv);
app.get('/AddEquip',EditEquip.addEquipment);
app.get('/AddingEquip',EditEquip.addingEquip);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
