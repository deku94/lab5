var data = require("../data.json");
var index=6;
module.exports={
	addingEnv : function(req, res) {
		console.log(req.query.hiddenTxt);
		var noise;
		var tempEQUIP=[];
		var key;
		var reqArray=JSON.parse(req.query.hiddenTxt);
		for(key in reqArray){
			console.log(reqArray[key]);
			var index;
			for(index in data['equipment']){
				if(data['equipment'][index]['idnum']==reqArray[key]){
					console.log("FOUND");
					tempEQUIP.push(data['equipment'][index]['name']);
					break;
				}
			}

		}
		if(req.query.points<1/3*100){
			noise='quiet';
		}
		else if(req.query.points<2/3*100){
			noise='medium';
		}
		else{
			noise='loud';
		}
		for (key in data['environment']){
			if(String(data['environment'][key]['name']).localeCompare(String(req.query.name))==0){
				console.log("MATCH");
				res.redirect('/environment');
				return;
			}
		}
		data["environment"].push({

			"name": req.query.name,
			"equipment": tempEQUIP,
			"noise": noise,
			"type": req.query.place,
			"soundValue":req.query.points,
			"idnum":index
		});
		index++;
		//console.log(req.params.equip);
		//res.render("environment",data);

		res.redirect('/environment');
	},
	addEnv : function(req, res) {  
		res.render('addEnvironment',data);
	},
	view :function(req,res){
		console.log("YES");
		console.log(req.params.id);
		var finding=String(req.params.id);
		var total;
		var key;
		var ourId=0;
		var temp = {
            "equip" : [],
            "found" : 0,
            'OGID':finding
        };
		for (ourId in data.environment){
			if(finding==data['environment'][ourId]['idnum'] ){
				temp.found=1;
				break;
			}
		}
		finding=data['environment'][ourId]['equipment'];
		if(temp.found==1){
			for (ourId in finding){	
				for(key in data.equipment){

					if(finding[ourId].localeCompare(String(data['equipment'][key]['name']))==0){
						//console.log(data['equipment'][key]);
						temp['equip'].push(data['equipment'][key]);
						
					}

				}
			}
			//console.log(temp);
			res.json(temp);
			return;
		}
		
		
	},
	edit: function(req,res){
		console.log("EDIT ");
		var finding=req.params.idnum;
		var equip= String(req.params.equip);
		var total;
		var key;
		
		
		for(key in data.environment){

			if(finding==data['environment'][key]['idnum'] ){
				finding=data['environment'][key];
				if(String(data['soundTemp']['value']).localeCompare('50')==0 ){
					data['soundTemp']['value']=finding.soundValue;
				}	
				data['tempEnv']={
					"name": finding.name,
					"equipment": finding.equipment,
					"type": finding.type,
					"soundValue": data['soundTemp']['value'],
					"location":finding.type,
					"idnum":finding.idnum
				};
				console.log('YES');
				console.log(data['tempEnv']);
				res.render('EditEnvironment',data);
				return;
			}


		}
		data['tempEnv']={
			"Environment": "NO INFO",
			"name": "NO INFO",
			"type": "NO INFO",
			"soundValue":data['soundTemp']['value'],
			"location":"NO INFO",
			"idnum":-1
		};
		console.log("SHOOT!!! YOU SHOULD NOT BE HERE");
		res.render('EditEnvironment',data);
	},
	editing: function(req,res){
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
		data['soundTemp']['value']=50;
		res.redirect('/environment');
			
		return;
		
	},
	pickEnv: function(req,res){
		console.log("SOUND TRANSMITTED");
		//res.redirect('/environment');
		if(String(req.query.environment).localeCompare(String("New"))==0){
			res.redirect('/addEnv');
			return;
		}
		else{
			for(key in data['environment']){
				console.log(data['environment'][key]['name']);
				if(String(req.query.environment).localeCompare(String(data['environment'][key]['name']))==0){
					res.redirect('/environment/edit/'+data['environment'][key]['idnum']);
					return;
				}
			}
		}
		res.redirect('/soundtest');

	},
	tempEnv: function(req,res){
		console.log("MAKEING TEMPS");
		console.log(req.query.checkbox0);

	}

}