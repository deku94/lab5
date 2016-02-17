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
	}
}