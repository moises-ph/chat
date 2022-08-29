const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    userMail: {type: String, required: true},
    password: {type: String, required: true},
    userName: {type: String, required: true},
    phone: {type: String, required: true},
    description: {type: String, required: true}
});

module.exports = model('User', userSchema);