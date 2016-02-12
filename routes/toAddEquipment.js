var data = require("../data.json");

exports.addEquipment= function(req, res) {    
	// Your code goes here
	console.log("ADDING EQUIP");
	res.render('addEquipment',data);
 }