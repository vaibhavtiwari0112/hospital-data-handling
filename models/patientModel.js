const Joi = require('joi');

const patientSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().min(10).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().pattern(/^\+\d{1,3}\d{10}$/).required(),
    password: Joi.string().min(8).max(15).pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/).required(),
    photo: Joi.string().allow(null).optional(), 
    psychiatrist_id: Joi.number().integer().required()
});

module.exports = patientSchema;
