import express from 'express';
import { RestaurantController } from './restaurant.controller';
import auth from '../../../middlewares/auth';
import validateRequest from '../../../middlewares/validateRequest';
import { createRestaurantSchema } from './restaurant.validation';

const router = express.Router();

router.post(
    '/create-restaurant',
    auth('common'),
    validateRequest(createRestaurantSchema),
    RestaurantController.createRestaurantController
 )

export const restaurantRoutes = router;