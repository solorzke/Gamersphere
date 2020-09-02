const mongoose = require('mongoose');

const CartSchema = mongoose.Schema({
	user: {
		required: true,
		type: String
	},

	products: [ String ]
});

module.exports = mongoose.model('Cart', CartSchema);
