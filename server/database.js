const { MongoClient, ServerApiVersion } = require('mongodb');
const dontenv = require('dotenv');

const USER = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;

const uri = `mongodb+srv://${USER}:${password}@myclustter.1zxpbln.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = client;