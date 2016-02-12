var data = require("../data.json");

exports.addingEquip = function(req, res) {
	
	data["equipment"].push({

		"name": req.query.name,
		"type": req.query.type,
		"usage": req.query.usage,	
	});
	res.render("equipment",data);
}