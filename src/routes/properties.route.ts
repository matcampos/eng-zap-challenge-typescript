import { Router } from 'express';
import { propertiesController } from '../controllers';
import { validate } from 'express-validation';
import paramValidation from '../helpers/param-validation';
import { pagination } from '../middlewares';

const routes = Router();

routes
    .route('/')
    .get(validate(paramValidation.findProperties), pagination, propertiesController.findProperties);

export default routes;