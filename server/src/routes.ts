import express, { response } from 'express'

import PointsController from './controllers/pointsControllers';
import ItemsController from './controllers/itemsControllers';
//index, show, create,update,delete
const routes = express.Router();
const pointsController = new PointsController;
const itemsController = new ItemsController;

routes.get('/items', itemsController.index);

routes.post('/points', pointsController.create)
routes.get('/points/:id',pointsController.show)
routes.get('/points',pointsController.index)

export default routes;