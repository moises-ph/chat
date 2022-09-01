const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (token) =>{
    new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) { 
                reject(err);
            } else {
                resolve(decoded);
            }
        })
    })
}

module.exports = verifyToken;