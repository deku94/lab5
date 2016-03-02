var data = require('../data.json');
module.exports = {
	view_a: function (req, res) {
    	res.render('soundtest', data);
	},
    view_b: function (req, res) {
        res.render('soundtest_b', data);
    },
	updateJSON: function(req,res){
		console.log("RETURN SOUND STORAGE");
		data['soundTemp'].value=req.params.value;
		console.log(data['soundTemp']);
	}
}