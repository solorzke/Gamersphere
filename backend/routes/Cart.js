const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Sanitize = require('../scripts/Sanitize');

router.get('/cart', async (req, res) => {
	try {
		console.log('> Requesting: get cart info...');
		req = new Sanitize(req).disinfectRequest();
		const cart = await Cart.findOne({ user: req.body.id }, (err, res) =>
			console.log('> Cart info acquired: ' + res)
		);
		res.json({ valid: true, cart });
	} catch (error) {
		console.log(error);
		res.json({ valid: false, message: error });
	}
});

router.post('/cart', async (req, res) => {
	try {
		console.log('> Requesting: creating new cart for user ...');
		req = new Sanitize(req).disinfectRequest();
		const cart = new Cart({
			user: req.body.id,
			products: req.body.products
		});
		await cart.save((err, res) => console.log('> Cart created...' + res));
		res.json({ valid: true });
	} catch (error) {
		console.log(error);
		res.json({ valid: false, message: error });
	}
});

router.patch('/cart', async (req, res) => {
	try {
		console.log('> Requesting: update cart info...');
		req = new Sanitize(req).disinfectRequest();
		const cart = await Cart.updateOne({ _id: req.body.id }, { $set: req.body.update }, (err, res) =>
			console.log('> Cart updated ' + res)
		);
		res.json({ valid: true, cart });
	} catch (error) {
		console.log(error);
		res.json({ valid: false, message: error });
	}
});

router.delete('/cart/:id', async (req, res) => {
	try {
		console.log('> Requesting: delete cart info...');
		req = new Sanitize(req).disinfectRequest();
	} catch (error) {
		console.log(error);
		res.json({ valid: false, message: error });
	}
});
