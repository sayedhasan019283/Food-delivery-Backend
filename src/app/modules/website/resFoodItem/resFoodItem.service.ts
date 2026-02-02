import { TMenuItem } from "./resFoodItem.interface";
import { ResFoodItemModel } from "./resFoodItem.model";

const createFoodItemService = async (payload : TMenuItem) => {
  // Business logic for creating a food item goes here
  const result = await ResFoodItemModel.create(payload);
  return result;
}

const readAllFoodItemService = async () => {
  const result = await ResFoodItemModel.find();
  return result;
}
const getSingleFoodItemService = async (id: string) => {
  const result = await ResFoodItemModel.findById(id);
  return result;
} 
const updateFoodItemService = async (id: string, payload: Partial<TMenuItem>) => {
  const result = await ResFoodItemModel.findByIdAndUpdate(id, payload, { new: true });
  return result;
}

const deleteFoodItemService = async (id: string) => {
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

