import { Joi } from 'express-validation'

export default {
    findProperties: {
        query: Joi.object({
            page: Joi.number().optional().default(1),
            pageSize: Joi.number().optional().default(30),
            platform: Joi.string().allow('').valid('ZAP', 'VIVA_REAL').optional()
        }).optional()
    }
};
