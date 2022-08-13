const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://MoisesPH:jpctTumxjsMcwi76@myclustter.1zxpbln.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports = client;