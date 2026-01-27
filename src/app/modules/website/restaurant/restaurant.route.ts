import express from 'express';
import { RestaurantController } from './restaurant.controller';
import auth from '../../../middlewares/auth';
import validateRequest from '../../../middlewares/validateRequest';
import { createRestaurantSchema, updateRestaurantSchema } from './restaurant.validation';

const router = express.Router();

router.post(
    '/create-restaurant',
    auth('common'),
    validateRequest(createRestaurantSchema),
    RestaurantController.createRestaurantController
 )

 router.get(
    '/read-restaurants ',
    auth('common'),
    RestaurantController.readRestaurantController
 )

 router.put(
    '/update-restaurant/:id',
    auth('common'),
    validateRequest(updateRestaurantSchema),
    RestaurantController.updateRestaurantController
 )

 router.delete(
    '/delete-restaurant/:id',
    auth('common'),
    RestaurantController.deleteRestaurantController
 )
    router.get( 
        '/read-restaurant/:id',
        auth('common'),
        RestaurantController.getRestaurantByIdController
    )

export const restaurantRoutes = router;