const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('../routes/Auth');
app.use('/', postsRoute);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
	console.log('Mongoose is ready to rumble...')
);

app.listen(port, () => console.log(`Server is running on port ${port}`));
