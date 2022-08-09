const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/userModel');

router.post('/', (req,res)=>{
    const { user, password, userName, phone, description } = req.body;
    const userP = user;
    const passwordCrypt = bcrypt.hashSync(password, 10);
    User.findOne({user: user}, (err,user)=>{
        if(err){
            res.status(500).send({
                status: 'error',
                message: 'Error en la peticion'});
        }else{
            if(!user){
                const newUser = new User({
                    user: userP,
                    password: passwordCrypt,
                    userName: userName,
                    phone: phone,
                    description: description
                });
                newUser.save((err,userStored)=>{
                    if(err){
                        console.log(err);
                        res.status(500).send({
                            status: 'error',
                            message: 'Error al guardar el usuario'});
                    }else{
                        if(!userStored){
                            res.status(404).send({
                                status: 'error',
                                message: 'No se ha registrado el usuario'});
                        }else{
                            res.status(200).send({
                                status: 'success',
                                message: 'Usuario registrado correctamente'});
                        }
                    }
                });
            }else{
                res.status(200).send({
                    status: 'error',
                    message: 'Ya existe un usuario con ese correo'});
            }
        }
    });
});

module.exports = router;