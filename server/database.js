const mongoose = require('mongoose');
const dontenv = require('dotenv');

const USER = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;

const url = `mongodb+srv://${USER}:${password}@myclustter.1zxpbln.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err));

module.exports = mongoose;