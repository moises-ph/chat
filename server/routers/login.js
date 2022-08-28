const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Include Express Validator Functions
const { check, validationResult } = require('express-validator');

const User = require('../models/userModel');


router.post('/validate', (req,res)=>{
    const errors = validationResult(req);
    if (errors) res.status(400).json(errors);

    const { user, password } = req.body;
    
});

module.exports = router;