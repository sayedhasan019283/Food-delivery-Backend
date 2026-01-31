import { Types } from "mongoose";

export type TMenuItem = {
  restaurantId: Types.ObjectId;
  name: string;
  description?: string;
  price: number;
  imageUrl?: string;
  isAvailable: boolean;
}