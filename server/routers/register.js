const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const client = require('../database');

const {User} = require('../models');

const Joi = require('joi');

const schemRegister = Joi.object({
    userMail :Joi.string().email().required(),
    password :Joi.string().required(),
    userName: Joi.string().required(),
    phone: Joi.string().required(),
    description : Joi.string().required()
});

router.post('/', async (req,res)=>{
    const { userMail, password, userName, phone, description } = req.body;
    
    const {error} = await schemRegister.validateAsync({userMail, password, userName, phone, description})
    if (error) res.status(401).json({error: error})
    else{
        const user_exist = await User.findOne({userMail: userMail});
        if (user_exist) res.status(402).json({error: "User Already exists"});
        else{
            const passwordCrypt = await bcrypt.hash(password, 10);

            const newUser = new User({
                userMail: userMail,
                password: passwordCrypt,
                userName: userName,
                phone: phone,
                description: description
            });

            await newUser.save();
            res.status(200).json({message: "User created succesfully"})
        }
    }
});

module.exports = router;