import express from "express";
import {
  createFoodItem,
  getFoodItems,
} from "../controllers/foodItemController.js";

export const foodItemRouter = express.Router();

foodItemRouter.post("/", createFoodItem).get("/", getFoodItems);
