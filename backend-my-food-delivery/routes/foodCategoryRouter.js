import express from "express";
import {createFoodCategory} from "../controllers/foodCategoryController.js";

export const foodCategoryRouter = express.Router();

foodCategoryRouter.post("/", createFoodCategory);
