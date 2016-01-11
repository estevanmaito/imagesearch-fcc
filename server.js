'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongo = require('mongodb').MongoClient;

var app = express();

var URImongo = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || process.env.MONGO_URI;

mongo.connect(URImongo, function(err, db) {
	if (err) throw err;

	console.log('Mongo connected on port 27017...');

	routes(app, db);

	app.listen(process.env.PORT || 8080);
});