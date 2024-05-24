const Joi = require('joi');

const psychiatristSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    hospital_id: Joi.number().required()
});

module.exports = psychiatristSchema;
