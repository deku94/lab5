var data = require("../data.json");

module.exports={
	addingEnv : function(req, res) {
	
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
		//res.render("environment",data);
		res.redirect('/environment');
	},
	addEnv : function(req, res) {    
	// Your code goes here
		console.log("ADD ENV");
		res.render('addEnvironment',data);
	},
	view :function(req,res){
		console.log("YES");
		console.log(req.params.id);
		var finding=String(req.params.id);
		var total;
		var key;
		for(key in data.equipment){
			if(finding.localeCompare(String(data['equipment'][key]['name']))==0){
				res.json(data['equipment'][key]);
				break;
			}

		}
		res.json({
			"name": String(req.params.id),
			"type": "NO INFO",
			"usage": "NO INFO"
		});
		
	}
}