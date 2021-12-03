var mongoose = require('mongoose');
var Schema = mongoose.Schema;

FilmSchema = new Schema( {
	name: String,
	desc: String,
	price: Number,
	image: String,
	discount: Number,
	user_id: Schema.ObjectId,
	is_delete: { type: Boolean, default: false },
	date : { type : Date, default: Date.now }
}),
film = mongoose.model('film', FilmSchema);

module.exports = film;