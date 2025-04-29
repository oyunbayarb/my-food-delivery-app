import {configDotenv} from "dotenv";
import jwt from "jsonwebtoken";

configDotenv();

const secret_key = process.env.SECRET_KEY;
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  next();
};
