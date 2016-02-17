var data = require("../data.json");

exports.addEnv= function(req, res) {    
	// Your code goes here
	console.log("ADD ENV");
	res.render('addEnvironment',data);
	

 }