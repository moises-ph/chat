const mongoose = require('mongoose');

require('dotenv').config();

const password = process.env.MONGO_PASSWORD;

const url = `mongodb+srv://MoisesPH:${password}@myclustter.1zxpbln.mongodb.net/chat?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB Connected'))
    .catch(err => console.log(err));

module.exports = mongoose;