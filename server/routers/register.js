const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const client = require('../database');

const User = require('../models/userModel');

router.post('/', async (req,res)=>{
    const { user, password, userName, phone, description } = req.body;
    const userP = user;
    const passwordCrypt = bcrypt.hashSync(password, 10);
    client.connect(err => {
        if (err) throw err;
        const collection = client.db("chat").collection("users");
        collection.findOne({user: userP}, async (err, result) => {
            if (err) throw err;
            if(result){
                return res.status(400).json({
                    status: 'error',
                    message: 'El usuario ya existe'
                });
            }
            else{
                const newUser = new User({
                    user: userP,
                    password: passwordCrypt,
                    userName: userName,
                    phone: phone,
                    description: description
                });
                await collection.insertOne(newUser).then(result => {
                    return res.status(200).json({
                        status: 'success',
                        message: 'Usuario creado correctamente'
                    });
                }).catch(err => console.log(err));
            }
        });
    })
});

module.exports = router;