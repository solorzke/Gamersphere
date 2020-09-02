const mongoose = require('mongoose');

const BillingAddressSchema = mongoose.Schema({
	user: {
		required: true,
		type: String
	},
	address: String,
	city: String,
	state: String,
	country: String,
	pobox: String
});

module.exports = mongoose.model('BillingAddress', BillingAddressSchema);
