var data = require("../data.json");

module.exports={
	addingEquip:function(req, res) {
		
		data["equipment"].push({

			"name": req.query.name,
			"type": req.query.type,
			"usage": req.query.usage,	
		});
		//res.render("equipment",data);
		res.redirect('/equipment');
	},
	addEquipment:function(req, res) { 
		// Your code goes here
		console.log("ADDING EQUIP");
		res.render('addEquipment',data);
	},
	view :function(req,res){
		console.log("YES");
		var found=0;
		console.log(req.params.id);
		var finding=String(req.params.id);
		var key;
		var temp=new Array();
		for(key in data.environment){
			console.log(data['environment'][key]['equipment']);
			if(finding.localeCompare(String(data['environment'][key]['equipment']))==0){
				console.log("FOUND");
				found=1;
				temp.push(data['environment'][key]);
				//res.json(data['environment'][key]);
				
			}

		}
		if (found==1){
			res.json(temp);
			return;
		}
		temp.push({
			"name": "NOWHERE",
			"equipment": finding,
			"noise": "NO INFO",
			"type": "NO INFO"	
		});
		res.json(temp);
	}
}
//It should be sound level, environment name, the equipment used in the environment.