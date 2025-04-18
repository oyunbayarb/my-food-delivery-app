import express from "express";
import {createUser} from "../controllers/UserController.js";

export const createUserRouter = express.Router();

createUserRouter.post("/", createUser);
