import { Router } from 'express';
import { findProperties } from '../controllers/properties.controller';
import { validate } from 'express-validation';
import paramValidation from '../helpers/param-validation';
import { pagination } from '../middlewares';
const routes = Router();

routes
    .route('/')
    .get(validate(paramValidation.findProperties), pagination, findProperties);

export default routes;