const fs = require('fs');
const request = require('request');
const uuid = require('uuid');
const readline = require('readline');
const path = require('path');

const interface = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const question = (str) => new Promise((resolve) => interface.question(str, resolve));
const start = async () => {
	const _ID = await question('> Enter the id of the product: ');
	const limit = await question('> How many images are you going to download? ');
	const DIRECTORY = path.join(__dirname, '..', `images/${_ID}`);
	let URIS = [];

	for (let i = 0; i < limit; i++) {
		const URI = await question('> Enter the image uri: ');
		URIS.push(URI);
	}
	const DOWNLOAD = (uri, filename, callback) => {
		request.head(uri, (err, res, body) => {
			console.log('> content-type:', res.headers['content-type']);
			console.log('> content-length:', res.headers['content-length']);
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		});
	};
	fs.exists(DIRECTORY, (bool) => {
		if (!bool) {
			fs.mkdir(DIRECTORY, {}, (err) => {
				if (err) throw err;
				console.log('> Folder created...');
			});
		}
	});
	URIS.forEach((element) => {
		const UUID_FILENAME = uuid.v1();
		const FILENAME = path.join(__dirname, '..', `images/${_ID}/${UUID_FILENAME}.jpg`);
		DOWNLOAD(element, FILENAME, () => {
			console.log(`> ${FILENAME} has been added...`);
		});
	});
};
start();
interface.on('close', function() {
	console.log('\n> Shutting down...');
	process.exit(0);
});
