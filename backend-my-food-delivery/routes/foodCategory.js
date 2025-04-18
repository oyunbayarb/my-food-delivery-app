import express from "express";
import {createFoodCategory} from "../controllers/foodCategory.js";

export const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/", createFoodCategory);
