var controller = require('../controllers/notes_controller.js');

module.exports = function(app) {
	app.get('/notes', function (request, response) {
		controller.show(request, response);
	})

	app.post('/notes/new', function(request, response){
		controller.create(request, response);
	})
}