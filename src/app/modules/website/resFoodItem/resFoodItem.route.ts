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
router.get(
  "/get-food-items",
  auth("common"),
  ResFoodItemController.readAllFoodItemController
);

router.get(
  "/get-food-item/:id",
  auth("common"),
  ResFoodItemController.getSingleFoodItemController
);

router.patch(
  "/update-food-item/:id",
  auth("common"),
  validateRequest(createMenuItemSchema),
  ResFoodItemController.updateFoodItemController
);

router.delete(
  "/delete-food-item/:id",
  auth("common"),
  ResFoodItemController.deleteFoodItemController
);
export const ResFoodItemRoutes = router;