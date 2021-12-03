var mongoose = require('mongoose');
var Schema = mongoose.Schema;

FilmSchema = new Schema( {
	id:String,
	title: String,

}),
film = mongoose.model('film', FilmSchema);
module.exports = film;