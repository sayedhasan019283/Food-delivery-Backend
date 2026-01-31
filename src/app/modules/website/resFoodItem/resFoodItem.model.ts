
import { Schema, model } from "mongoose";
import { TMenuItem } from "./resFoodItem.interface";

const menuItemSchema = new Schema<TMenuItem>(
  {
    restaurantId: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    imageUrl: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export const ResFoodItemModel = model<TMenuItem>(
  "ResFoodItem",
  menuItemSchema
);