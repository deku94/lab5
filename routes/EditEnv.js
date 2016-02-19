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
			"type": req.query.place,
			"soundValue":req.query.points
		});
		//res.render("environment",data);
		res.redirect('/environment');
	},
	addEnv : function(req, res) {    
	// Your code goes here
		console.log("ADD ENV");
        var name = req.query.name || "";
        var decibel = req.query.decibels || "50";
        data["soundTestQuery"] = {
            "name": name,
            "soundValue": decibel
        }
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
				console.log(data['equipment'][key]);
				res.json(data['equipment'][key]);
				return;
			}

		}
		res.json({
			"name": String(req.params.id),
			"type": "NO INFO",
			"usage": "NO INFO"
		});
		
	},
	edit: function(req,res){
		console.log("EDIT ");
		var finding=String(req.params.name);
		var total;
		var key;
		
		
		for(key in data.equipment){

			if(finding.localeCompare(String(data['environment'][key]['name']))==0){
				//console.log(data['equipment'][key]);

				data['temp']={
					"Environment": req.params.name,
					"name": data['environment'][key]['equipment'],
					"type": data['environment'][key]['type'],
					"soundValue": req.params.sound,
					"location":req.params.location
				};
				console.log(data['temp']);
				res.render('EditEnvironment',data);
				return;
			}


		}
		data['temp']={
			"Environment": req.params.name,
			"name": "NO INFO",
			"type": "NO INFO",
			"soundValue":req.params.sound,
			"location":req.params.location
		};
		
		res.render('EditEnvironment',data);
	},
	editting: function(req,res){
		var finding=String(req.params.original);
		var key;
		var noise;

		
		for(key in data.equipment){

			if(finding.localeCompare(String(data['environment'][key]['name']))==0){
				//console.log(data['equipment'][key]);
				if((String(req.query.button)).localeCompare("DELETE")==0){
					delete data['environment'][key];

				}
				else{
					if(req.query.points<1/3*100){
						noise='quiet';
					}
					else if(req.query.points<2/3*100){
						noise='medium';
					}
					else{
						noise='loud';
					}
					
					data["environment"][key].name=req.query.name;
					data["environment"][key].equipment=req.query.equip;
					data["environment"][key].noise=noise;
					data["environment"][key].type=req.query.place;
					data["environment"][key].soundValue=req.query.points;
				
					res.render("environment",data);
				}
			}


		}
		res.render("environment",data);
					
		return;
		
	},
	deleteEnv: function(req,res){


	}
}