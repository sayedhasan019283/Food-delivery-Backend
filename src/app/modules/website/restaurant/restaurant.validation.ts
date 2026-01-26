import { z } from "zod";

const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

export const createRestaurantSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
    isOpen: z.boolean().optional(),
    ownerId: z.string(),
    location: z.object({
      lat: z.number(),
      lng: z.number(),
    }),
    avgDeliveryTime: z.number().int().positive(),
    openTime: z.string().regex(timeRegex, "Invalid time format (HH:mm)"),
    closeTime: z.string().regex(timeRegex, "Invalid time format (HH:mm)"),
  }),
});
