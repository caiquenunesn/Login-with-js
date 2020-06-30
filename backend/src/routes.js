const express = require('express');
const RegisterController = require('./Controllers/RegisterController');
const LoginController = require('./Controllers/LoginController');
const { Segments, Joi, celebrate } = require('celebrate');

const auth = require('./middlewares/auth');

const route = express.Router();


route.post('/register' , celebrate({
            [Segments.BODY]: Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().required().email(),
                passwordn: Joi.string().required().min(5).max(22),
                whatsapp: Joi.string().required().min(10).max(11),
                city: Joi.string().required(),
                uf: Joi.string().required().length(2)
            })
        })
 , RegisterController.create);


route.get('/users' , auth , RegisterController.index);

route.post('/login', celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required().email(),
        pass: Joi.string().required().min(3).max(22)
    })
})
, LoginController.create);

module.exports = route;