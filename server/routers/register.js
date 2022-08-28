const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const client = require('../database');

const User = require('../models/userModel');

const Joi = reqiure('joi');

const schemRegister = Joi.object({
    
});

router.post('/', async (req,res)=>{
    const { user, password, userName, phone, description } = req.body;
    const userP = user;
    const passwordCrypt = bcrypt.hashSync(password, 10);
    
    const user_exist = await User.findOne({});
});

module.exports = router;