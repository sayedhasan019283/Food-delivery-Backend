import { TRestaurant } from "./restaurant.interface";
import { RestaurantModel } from "./restaurant.model";

const createRestaurantService = async (payload : TRestaurant ) => {
    // Implementation of restaurant service creation
    const result = await RestaurantModel.create(payload);
    return result;
};

const readRestaurantService = async () => {
    const result = await RestaurantModel.find();
    return result;
};

const updateRestaurantService = async (id : string, payload : TRestaurant) => {
    // Implementation of restaurant service update
    const result = await RestaurantModel.findByIdAndUpdate(id, payload, { new: true });
    return result;
}

const deleteRestaurantService = async (id : string) => {
    // Implementation of restaurant service deletion
    const result = await RestaurantModel.findByIdAndDelete(id);
    return result;
};

const getSingleRestaurantByIdService = async (id : string) => {
    // Implementation of get restaurant by ID service
    const result = await RestaurantModel.findById(id);
    return result;
};

export const RestaurantService = {
    createRestaurantService,
    readRestaurantService,
    updateRestaurantService,
    deleteRestaurantService,
    getSingleRestaurantByIdService,
};