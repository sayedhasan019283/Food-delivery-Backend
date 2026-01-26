import { TRestaurant } from "./restaurant.interface";
import { RestaurantModel } from "./restaurant.model";

const createRestaurantService = async (payload : TRestaurant ) => {
    // Implementation of restaurant service creation
    const result = await RestaurantModel.create(payload);
    return result;
};

export const RestaurantService = {
    createRestaurantService,
};