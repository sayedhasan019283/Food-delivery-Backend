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

const readRestaurantController = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
  // Controller logic here
  const result = await RestaurantService.readRestaurantService();
  res.status(200).json({
    success: true,
    message: "Restaurants retrieved successfully",
    data: result,
  });
});

const updateRestaurantController = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
  // Controller logic here
  const id = req.params.id;
  const payload = req.body;
  const result = await RestaurantService.updateRestaurantService(id, payload);
  res.status(200).json({
    success: true,
    message: "Restaurant updated successfully",
    data: result,
  });
});
const deleteRestaurantController = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
  // Controller logic here
  const id = req.params.id;
  const result = await RestaurantService.deleteRestaurantService(id); 
  res.status(200).json({
    success: true,
    message: "Restaurant deleted successfully",
    data: result,
  });
});
const getRestaurantByIdController = catchAsync(async (req : Request, res : Response, next : NextFunction) => {
  // Controller logic here
  const id = req.params.id;
  const result = await RestaurantService.getSingleRestaurantByIdService(id);
  res.status(200).json({
    success: true,
    message: "Restaurant retrieved successfully",
    data: result,
  });
});

export const RestaurantController = {
  createRestaurantController,
  readRestaurantController,
  updateRestaurantController,
  deleteRestaurantController,
  getRestaurantByIdController,
};