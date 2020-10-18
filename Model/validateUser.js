const Joi = require ('joi');
let users = require('../Controller/Users.js');
// Valdering med Joi til når man skal update og insert


module.exports = function validateUser(user) {
    const schema = {
        email: Joi.string().email().required(),  
        name: Joi.string().required(),
        age: Joi.number().required(),
        gender: Joi.string().required(),
        work: Joi.string().required(),
        school: Joi.string().required(),
        profile_text: Joi.string().required(),
        profile_img: Joi.string().required(),
        isPaying: Joi.required()
                     
     };

    return Joi.validate(user, schema);

};

