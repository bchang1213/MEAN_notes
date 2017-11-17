var mongoose = require('mongoose');

var Note = mongoose.model('Note');

module.exports = {
	show: function(request, response) {
		Note.find({}, function(error, notes) {
			if(error){
				console.log(error);
			}
			else{
				console.log("retrieved notes from db.");
				response.json(notes);
			}
		})
	},

	create: function(request, response) {
		var note = new Note(request.body);
		note.save(function(error) {
			if(error){
				console.log("something went wrong");
				response.json(error);
			}
			else {
				console.log("new note saved with controller.");
				response.json(note);
			}
		})
	}
}