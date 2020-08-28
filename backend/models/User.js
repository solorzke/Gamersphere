const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	fname: {
		required: true,
		type: String
	},

	lname: {
		required: true,
		type: String
	},

	username: {
		required: true,
		type: String
	},

	countersign: {
		required: true,
		type: String
	},

	created: {
		type: Date,
		default: Date.now
	},

	street: {
		required: true,
		type: String
	},

	city: {
		required: true,
		type: String
	},

	state: {
		required: true,
		type: String
	},

	zip: {
		required: true,
		type: Number
	},

	email: {
		required: true,
		type: String
	},

	phone: {
		required: true,
		type: Number
	}
});

module.exports = mongoose.model('Users', UserSchema);
