import { z } from "zod";

export const createMenuItemSchema = z.object({
  body: z.object({
    restaurantId: z.string({
      required_error: "Restaurant ID is required",
    }),
    categoryId: z.string({
      required_error: "Category ID is required",
    }),
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
    price: z.number().min(0, "Price must be positive"),
    imageUrl: z.string().url().optional(),
    isAvailable: z.boolean().optional(),
  }),
});

export const updateMenuItemSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    description: z.string().optional(),
    price: z.number().min(0).optional(),
    imageUrl: z.string().url().optional(),
    isAvailable: z.boolean().optional(),
    categoryId: z.string().optional(),
  }),
});