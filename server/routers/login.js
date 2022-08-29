const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Joi = require('joi')

const validateLogin = Joi.object({
    userMail: Joi.string().email().required(),
    password: Joi.string().required()
})

const User = require('../models/userModel');

require('dotenv').config();

router.post('/validate', async (req,res)=>{
    const { userMail, password } = req.body;

    const {error} = await validateLogin.validateAsync({userMail, password});
    if (error) res.status(400).json({error});

    const user_bd = await User.findOne({userMail});
    if (!user_bd) res.status(400).json({error: 'User not exists'});

    const password_verify = await bcrypt.compare(password, user_bd.password);
    if (password_verify) {
        const secret = process.env.JWT_SECRET
        const token = jwt.sign({userMail, name: user_bd.userName}, secret);
        res.status(200).header({token}).json({message: 'User Loged In succesfully'});
    }
    else{
        res.status(400).json({error: 'Password incorrect'});
    }

});

module.exports = router;