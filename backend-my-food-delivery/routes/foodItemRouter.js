import express from "express";
import {createFoodItem} from "../controllers/foodItemController.js";

export const foodItemRouter = express.Router();

foodItemRouter.post("/", createFoodItem);
