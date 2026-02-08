import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import { ResFoodItemService } from "./resFoodItem.service";

const createFoodItemController = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
    // Controller logic for creating a food item goes here
    const payload = req.body;
    const result = await ResFoodItemService.createFoodItemService(payload);
    res.status(201).json({
      success: true,
      message: "Food item created successfully",
      data: result,
    }); 
});

const readAllFoodItemController = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
  // Controller logic for reading all food items goes here
    const result = await ResFoodItemService.readAllFoodItemService();
    res.status(200).json({
      success: true,
      message: "Food items retrieved successfully",
      data: result,
    });
});

const getSingleFoodItemController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  // Controller logic for getting a single food item goes here
  const { id } = req.params;
  const result = await ResFoodItemService.getSingleFoodItemService(id);
  res.status(200).json({
    success: true,
    message: "Food item retrieved successfully",
    data: result,
  });
});
const updateFoodItemController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
   // Controller logic for updating a food item goes here
  const { id } = req.params;
  const payload = req.body; 
  const result = await ResFoodItemService.updateFoodItemService(id, payload);
  res.status(200).json({
    success: true,
    message: "Food item updated successfully",
    data: result,
  });
});

const deleteFoodItemController = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
   // Controller logic for deleting a food item goes here
  const { id } = req.params;
  const result = await ResFoodItemService.deleteFoodItemService(id);
  res.status(200).json({
    success: true,
    message: "Food item deleted successfully",
    data: result,
  });
});
// export controller functions as an object
export const ResFoodItemController = {
    createFoodItemController,
    readAllFoodItemController,
    getSingleFoodItemController,
    updateFoodItemController,
    deleteFoodItemController,
};