var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var route = require('./routes/route');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

route.setRoutes(app);

module.exports = app;
