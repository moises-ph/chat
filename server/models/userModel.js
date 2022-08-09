const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: {type: String, required: true},
    password: {type: String, required: true},
    userName: {type: String, required: true},
    phone: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);