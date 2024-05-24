const Joi = require('joi');

const hospitalSchema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required()
});

module.exports = hospitalSchema;
