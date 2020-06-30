const jwt = require('jsonwebtoken');
const connection = require('../database/connection');
const { secret } = require('../config/secret');


const auth = (req,res,next) => {
    try{
        
    const [, token] = req.headers.authorization.split(' ');
    const pay = jwt.verify(token, secret)
    
    
    return next()
    }
    catch(error){
        return res.json({error: 'no token'})
    };
}

module.exports = auth;