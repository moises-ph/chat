const mongoose = require('mongoose');

const URL = 'mongodb://localhost:27017/chat';

mongoose.connect(URL).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log(err);
});

module.exports = mongoose;