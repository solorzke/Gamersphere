const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Sanitize = require('../scripts/Sanitize');

//Get all products
router.get('/products', async (req, res) => {
	try {
		console.log('> Requesting: get all products...');
		req = new Sanitize(req).disinfectRequest();
		const products = await Product.find((err, res) => console.log('> Getting all products list: \n' + res));
		res.json({ valid: true, products });
	} catch (error) {
		console.log(error);
		res.json({ valid: false, message: error });
	}
});

//Get product info
router.get('/product/:id', async (req, res) => {
	try {
		console.log('> Requesting: get product info...');
		req = new Sanitize(req).disinfectRequest();
		const product = await Product.findOne({ _id: req.params.id }, (err, res) =>
			console.log('> Retrieving product info...\n' + res)
		);
		res.json({ valid: true, product });
	} catch (error) {
		console.log(error);
		res.json({ valid: false, message: error });
	}
});

//Delete Product
router.delete('/product/delete/:id', async (req, res) => {
	try {
		console.log('> Requesting: get product info...');
		req = new Sanitize(req).disinfectRequest();
		await Product.deleteOne({ _id: req.params.id }, (err, res) =>
			console.log('> Product deleted:' + req.params.id)
		);
		res.json({ valid: true });
	} catch (error) {
		console.log(error);
		res.json({ valid: true, message: error });
	}
});

//Update a Product Info
router.patch('/product', async (req, res) => {
	try {
		console.log('> Requesting: Update a Product...');
		req = new Sanitize(req).disinfectRequest();
		await Product.updateOne({ _id: req.query.id }, { $set: req.body }, (err, any) =>
			console.log('> Product Updated...\n' + any)
		);
		res.json({ valid: true });
	} catch (error) {
		console.log(error);
		res.json({ valid: false, message: error });
	}
});

//Insert new Product
router.post('/addProduct', async (req, res) => {
	try {
		console.log('> Requesting: Insert a new Product...');
		req = new Sanitize(req).disinfectRequest();
		const product = new Product({
			productName: req.body.productname,
			heroName: req.body.heroname,
			ability: req.body.ability,
			price: req.body.price,
			description: req.body.description,
			materials: req.body.materials,
			quantity: req.body.quantity
		});
		await product.save((error, res) => console.log('> Product added...\n' + res));
		res.json({ valid: true });
	} catch (error) {
		console.log(error);
		res.json({ valid: false, message: error });
	}
});

module.exports = router;
