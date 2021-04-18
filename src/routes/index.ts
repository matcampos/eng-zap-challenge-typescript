import { Router } from 'express';
const routes = Router();
import propertiesRoutes from './properties.route';

routes
    .use('/properties', propertiesRoutes);

export default routes;