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

export const ResFoodItemController = {
    createFoodItemController,
};