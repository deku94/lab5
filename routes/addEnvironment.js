var data = require("../data.json");

exports.addEnv= function(req, res) {    
	// Your code goes here
	console.log("ADDING ENV");
	res.render('addEnvironment',data);
 }