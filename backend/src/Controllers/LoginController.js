const connection = require('../database/connection');
const encrypt = require('../Encrypt/encrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('../config/secret');

module.exports = {
     async create(req, res){

        //const [, hash] = req.headers.authorization.split(' ');
        //const [username, pass] = Buffer.from(hash, 'base64').toString().split(':');
        
        const {email , pass} = req.body;
        
        try {
        const db = await connection('user')
        .where('email', email)
        .select('*')
        .first();
        const {id, name} = db;
        if(encrypt.validate(pass, db) === false){
          return res.status(401).json({error: 'Password incorreta!'})
     }
     
     const token = jwt.sign({email, id}, secret, { expiresIn: 864000 });
     return res.json({email, id, token, name})
     } catch {
          return res.status(401).json({ message: 'Falha na autenticação'})
     }
 }
         
}