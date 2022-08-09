const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/userModel');

router.post('/validate', (req,res)=>{
    const { user, password } = req.body;
    User.findOne({user: user}, (err,user)=>{
        if(err){
            res.status(500).send({
                status: 'error',
                message: 'Error en la peticion'});
        }else{
            if(!user){
                res.status(200).send({
                    status: 'error',
                    message: 'Usuario no encontrado'});
            }else{
                bcrypt.compare(password, user.password).then(check=>{
                    if(check){
                        req.session.user = user;
                        res.status(200).send({
                            status: 'success',
                            message: 'Usuario validado correctamente',
                            id: user._id});
                    }else{
                        res.status(200).send({
                            status: 'error',
                            message: 'Contraseña incorrecta'});
                    }
                }).catch(err=> console.log(err));
            }
        }
    });
});

module.exports = router;