const Joi = require('@hapi/joi');
const { defaultServerResponse, requestValidationMessage } = require('../constants');

const validateObjectSchema = (data, schema) => {
    const result = Joi.validate(data, schema);
    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                path: value.path,
            }
        });
        return errorDetails;
    } else {
        // indicate that there were no errors
        return null;
    }
};

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        const response = {...defaultServerResponse };
        const error = validateObjectSchema(req.body, schema);
        if (error) {
            response.body = error;
            response.status = 400;
            response.message = requestValidationMessage.BAD_REQUEST;
            res.send( response );
        } else {
            return next();
        }
    }
};