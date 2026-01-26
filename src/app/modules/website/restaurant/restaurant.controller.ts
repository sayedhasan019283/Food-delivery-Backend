import { NextFunction, Request, Response } from "express";
import catchAsync from "../../../../shared/catchAsync";
import { RestaurantService } from "./restaurant.service";

const createRestaurantController = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
  // Controller logic here
  const payload = req.body;
  const result = await RestaurantService.createRestaurantService(payload);
  res.status(201).json({
    success: true,
    message: "Restaurant created successfully",
    data: result,
  });
});

export const RestaurantController = {
  createRestaurantController,
};