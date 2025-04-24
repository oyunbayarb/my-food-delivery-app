import express from "express";
import {
  createFoodItem,
  getFoodItems,
  getFoodItemsById,
  getFoodsByCategoryId,
} from "../controllers/foodItemController.js";

export const foodItemRouter = express.Router();

foodItemRouter
  .post("/", createFoodItem)
  .get("/", getFoodItems)
  .get("/:id", getFoodItemsById)
  .get("/byCategory/:categoryID", getFoodsByCategoryId);
