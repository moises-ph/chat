const { Schema, model } = require('mongoose');


const chatSchema = new Schema({
    room : {type: String, required: true},
    message: [{
        sender: {type: String, required: true},
        reader: {type: String, required: true},
        message: {type: String, required: true},
        date: {type: String, required: true},
        status: {type: String, required: true}
    }]
});