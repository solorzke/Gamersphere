const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
//Routes
router.get('/', async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (error) {
		res.json({ message: error });
	}
});

router.post('/', async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description
	});
	try {
		const savedPost = await post.save();
		res.json(savedPost);
	} catch (error) {
		res.json({ message: err });
	}
});

router.get('/:postId', async (req, res) => {
	try {
		const post = await Post.findById(req.params.postId);
		res.json(post);
	} catch (error) {
		res.json({ message: error });
	}
	res.json(post);
});

router.delete('/:postId', async (req, res) => {
	try {
		const removed = await Post.remove({ _id: req.params.postId });
		res.json(removed);
	} catch (error) {
		res.json({ message: error });
	}
});

router.patch('/:postId', async (req, res) => {
	try {
		const updated = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
		res.json(updated);
		res.json(updated);
	} catch (error) {
		req.json({ message: error });
	}
});

router.get('/posts', (req, res) => {
	res.send('We are on posts.');
});

router.get('/about', (req, res) => {
	res.send('We are on about.');
});

module.exports = router;
