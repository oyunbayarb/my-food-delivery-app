import express from "express";
import {createFoodOrder} from "../controllers/foodOrderController.js";

export const foodOrderRouter = express.Router();

foodOrderRouter.post("/", createFoodOrder);
