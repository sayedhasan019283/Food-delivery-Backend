import { Types } from "mongoose";

export interface ILocation {
  lat: number;
  lng: number;
}

export interface IRestaurant {
  name: string;
  description?: string;
  isOpen: boolean;
  ownerId: Types.ObjectId;
  location: ILocation;
  avgDeliveryTime: number; // minutes
  openTime: string; // "10:00"
  closeTime: string; // "22:00"
  createdAt?: Date;
}
