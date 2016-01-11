'use strict';

var SearchHandler = require(process.cwd() + '/app/controllers/searchHandler.server.js');

module.exports = function(app, db) {

	var searchHandler = new SearchHandler(db);

	app.route('/')
		.get(function(req, res) {
			res.sendFile(process.cwd() + '/public/index.html');
		});

	app.route('/imagesearch/:query')
		.get(searchHandler.getImages);

	app.route('/latest')
		.get(searchHandler.getSearches);
};