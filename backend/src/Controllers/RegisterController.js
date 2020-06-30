const connection = require('../database/connection');
const hash = require('../Encrypt/encrypt');
const uid = require( 'uuid');
const jwt = require('jsonwebtoken');
const secret = require('../config/secret.json');


module.exports = {

    

    async index(req, res){
        const list = await connection('user').select('*');
        
        return res.json(list);
    },


    async create(req , res){

        
        const { name, email, passwordn, whatsapp, city, uf } = req.body;
        const passwordData = hash.saltHashPassword(passwordn);
        const salt =  passwordData.salt;
        const password =  passwordData.passwordHash;
        
        const uuid = uid.v4();
        const token = jwt.sign({email: email}, secret.secret, { expiresIn: 864000 });
        try{
            await connection('user').insert({
                uuid,
                name,
                email,
                password,
                salt,
                whatsapp,
                city,
                uf,
            });

        return res.json({uuid, token});
    }catch(error){
        return res.json({error: "email ja esta em uso"})
    }
    }
}