const crypto = require('crypto');

const genRandomBytes = (length) => {
    return crypto.randomBytes(Math.ceil(length/2))
    .toString('HEX').slice(0, length);
};

const sha512 = (password, salt) => {
    const hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    const value = hash.digest('hex');
    return {
        salt: salt,
        passwordHash: value,
    }
}
module.exports = {
    saltHashPassword(userpassword){
    const salt = genRandomBytes(16);
    const passwordData = sha512(userpassword, salt);
    return passwordData;
},

//module.exports = {
 validate(userpassword, db) {

    

    const saltFromDb = db.salt;
    const hashedPassFromDB = db.password;
    const passwordData = sha512(userpassword, saltFromDb);
    if(hashedPassFromDB === passwordData.passwordHash){
        return true ;
    }
    
    return false;
    }
}