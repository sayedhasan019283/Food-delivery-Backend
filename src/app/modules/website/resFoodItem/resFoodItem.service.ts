import { TMenuItem } from "./resFoodItem.interface";
import { ResFoodItemModel } from "./resFoodItem.model";

const createFoodItemService = async (payload : TMenuItem) => {
  // Business logic for creating a food item goes here
  const result = await ResFoodItemModel.create(payload);
  return result;
}

const readAllFoodItemService = async () => {
  // Business logic for reading all food items goes here
  const result = await ResFoodItemModel.find();
  return result;
}
const getSingleFoodItemService = async (id: string) => {
  // Business logic for getting a single food item goes here
  const result = await ResFoodItemModel.findById(id);
  return result;
} 
const updateFoodItemService = async (id: string, payload: Partial<TMenuItem>) => {
  // Business logic for updating a food item goes here
  const result = await ResFoodItemModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
}

const deleteFoodItemService = async (id: string) => {
  // Business logic for deleting a food item goes here
  const result = await ResFoodItemModel.findByIdAndDelete(id);
  return result;
}
export const ResFoodItemService = {
  createFoodItemService,
  readAllFoodItemService,
  getSingleFoodItemService,
  updateFoodItemService,
  deleteFoodItemService,
};

