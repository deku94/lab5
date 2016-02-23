var data = require("../data.json");
var index=6;
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
			"equipment": String(req.query.equip),
			"noise": noise,
			"type": req.query.place,
			"soundValue":req.query.points,
			"idnum":index
		});
		index++;
		console.log(req.params.equip);
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
		var finding=req.params.idnum;
		var equip= String(req.params.equip);
		var total;
		var key;
		
		
		for(key in data.environment){

			if(finding==data['environment'][key]['idnum'] ){
				

				data['temp']={
					"Environment": req.params.name,
					"name": req.params.equip,
					"type": req.params.type,
					"soundValue": req.params.sound,
					"location":req.params.location,
					"idnum":req.params.idnum
				};
				console.log('YES');
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
			"location":req.params.location,
			"idnum":-1
		};
		
		res.render('EditEnvironment',data);
	},
	editting: function(req,res){
		var finding=req.params.original;
		var key;
		var noise;
		//console.log('BEGINEDIT');
		//console.log(finding);
		
		for(key in data.environment){

			if(String(finding).localeCompare(String(data['environment'][key]['idnum']))==0){
				console.log(data['equipment'][key]);
				if((String(req.query.button)).localeCompare("DELETE")==0){
					delete data['environment'][key];
					
					(data.environment).splice(key,1);
					break;

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
					//res.redirect('/environment');
					break;
					//res.render("environment",data);
				}
			}


		}
		//res.render("environment",data);
		res.redirect('/environment');
			
		return;
		
	},
	deleteEnv: function(req,res){


	}
}