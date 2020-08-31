const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
	productName: {
		required: true,
		type: String
	},

	heroName: {
		required: true,
		type: String
	},

	ability: {
		required: true,
		type: Array
	},

	price: {
		required: true,
		type: Number
	},

	description: {
		required: true,
		type: String
	},

	materials: [ String ],

	quantity: {
		required: true,
		type: Number
	}
});

module.exports = mongoose.model('Products', ProductSchema);
