import express from "express";
import { ResFoodItemController } from "./resFoodItem.controller";
import auth from "../../../middlewares/auth";
import validateRequest from "../../../middlewares/validateRequest";
import { createMenuItemSchema } from "./resFoodItem.validation";
const router = express.Router();

router.post(
  "/create-food-items",
  auth("common"),
  validateRequest(createMenuItemSchema),
  ResFoodItemController.createFoodItemController
);

export const ResFoodItemRoutes = router;