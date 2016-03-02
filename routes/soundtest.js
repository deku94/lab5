var data = require('../data.json');
module.exports = {
	view_a: function (req, res) {
        data["showAlternative"] = false;
    	res.render('soundtest', data);
	},
    view_b: function (req, res) {
        data["showAlternative"] = true;
        res.render('soundtest', data);
    },
	updateJSON: function(req,res){
		console.log("RETURN SOUND STORAGE");
		data['soundTemp'].value=req.params.value;
		console.log(data['soundTemp']);
	}
}