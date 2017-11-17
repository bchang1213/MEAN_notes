// require mongoose
var mongoose = require('mongoose');

// create the schema
var NoteSchema = new mongoose.Schema({
	name: {type: String, required:true, minlength:3},
	text: {type:String, required:true, minlength:3}
},{timestamps:true});
// register the schema as a model
var Note = mongoose.model('Note', NoteSchema);