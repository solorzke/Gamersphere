const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Bcrypt = require('bcrypt');
const Sanitize = require('../scripts/Sanitize');

//Routes

/* Signing In */
router.post('/authentication', async (req, res) => {
	try {
		req = new Sanitize(req).disinfectRequest();
		const record = await User.findOne({ username: req.body.username });
		//Eliminate copy of password to the client when sending
		const passwordCheck = Bcrypt.compare(req.body.countersign, record.countersign);
		delete record['countersign'];
		passwordCheck ? res.json({ valid: true, record }) : res.json({ valid: false });
		console.log(passwordCheck ? '> Sign-In successful: ' + record : '> Sign-In unsuccessful');
	} catch (error) {
		console.log(error);
		res.json({ valid: false, message: error });
	}
});

/* Registering New User */
router.post('/authentication/register', async (req, res) => {
	try {
		req = new Sanitize(req).disinfectRequest();
		console.log(`> Requesting: new User registration with info:` + req.body);
		const passwordHash = await Bcrypt.hash(req.body.countersign, 10);
		console.log(passwordHash);
		const newUser = new User({
			fname: req.body.fname,
			lname: req.body.lname,
			username: req.body.username,
			countersign: passwordHash,
			street: req.body.street,
			city: req.body.city,
			state: req.body.state,
			zip: req.body.zip,
			email: req.body.email,
			phone: req.body.phone
		});
		const insertUser = await newUser.save((err, res) => console.log('> User registered: ' + res));
		res.json({
			valid: true,
			_id: insertUser._id.toString(),
			username: insertUser.username.toString(),
			fname: insertUser.fname.toString()
		});
	} catch (error) {
		console.log(error);
		res.json({ valid: false, message: error });
	}
});

/* Forgot Password? */
/* Part 1: Verify existence of username */
router.post('/verifyUsername', async (req, res) => {
	try {
		req = new Sanitize(req).disinfectRequest();
		console.log('> Requesting: verification of username' + req.body);
		const _id = await User.findOne({ username: req.body.username }, '_id');
		res.json({ valid: true, id: _id });
	} catch (error) {
		console.log(error);
		res.json({ valid: false, message: error });
	}
});

/* Part 2: Update the password of the user */
router.patch('/updatePw/:id', async (req, res) => {
	try {
		req = new Sanitize(req).disinfectRequest();
		console.log('> Requesting: update of password' + req.body);
		const passwordHash = await Bcrypt.hash(req.body.countersign, 10);
		await User.updateOne({ _id: req.params.id }, { $set: { countersign: passwordHash } }, (err, user) =>
			console.log('> Password updated')
		);
		res.json({ valid: true });
	} catch (error) {
		res.json({ valid: false, message: error });
		console.log(error);
	}
});

router.delete('/deleteUser', async (req, res) => {
	try {
		req = new Sanitize(req).disinfectRequest();
		console.log('> Requesting: Delete  user - ' + req.body);
		await User.deleteOne({ _id: req.body.id }, (err, res) => console.log('> User successfully deleted!'));
		res.json({ valid: true });
	} catch (error) {
		console.error(error);
		res.json({ valid: false, message: error });
	}
});

module.exports = router;
