// Get all of our friend data
var data = require('../environment.json');

exports.view = function(req, res){
	console.log(data);
	res.render('environment', data);

};