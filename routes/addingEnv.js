var data = require("../data.json");

exports.addEnv = function(req, res) {
	
	var noise;
	if(req.query.points<1/3*100){
		noise='quiet';
	}
	else if(req.query.points<2/3*100){
		noise='medium';
	}
	else{
		noise='loud';
	}
	data["environment"].push({

		"name": req.query.name,
		"equipment": req.query.equip,
		"noise": noise,
		"type": req.query.place	
	});
	res.render("environment",data);
}