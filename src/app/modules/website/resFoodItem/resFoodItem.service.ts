import { TMenuItem } from "./resFoodItem.interface";
import { ResFoodItemModel } from "./resFoodItem.model";

const createFoodItemService = async (payload : TMenuItem) => {
  // Business logic for creating a food item goes here
  const result = await ResFoodItemModel.create(payload);
  return result;
}

export const ResFoodItemService = {
  createFoodItemService,
};