const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Include Express Validator Functions
const { check, validationResult } = require('express-validator');

const User = require('../models/userModel');

var loginValidate = [
    check('user', 'Username must Be an Email Address').isEmail().trim().escape().normalizeEmail(),
    check('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
    .matches('[0-9]').withMessage('La contraseña debe tener al menos un numero')
    .matches('[a-zA-Z]').withMessage('La contraseña debe tener al menos una letra')
    .trim().escape()
]

router.post('/validate', (req,res)=>{
    const errors = validationResult(req);
    const { user, password } = req.body;
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    else{
        return res.status(200).json({
            status: 'success',
            message: 'Validacion correcta'
        });
    }
});

module.exports = router;