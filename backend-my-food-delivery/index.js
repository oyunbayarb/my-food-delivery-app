import express, {json} from "express";
import cors from "cors";
import {connectMongoDB} from "./connectDb.js";
import {foodCategoryRouter} from "./routes/foodCategory.js";
import {createUserRouter} from "./routes/userRoutes.js";

const port = process.env.PORT;
const app = express();

connectMongoDB();

app.use(json());
app.use(cors());
app.use("/foodCategory", foodCategoryRouter);
app.use("/user", createUserRouter);
app.get("/", (req, res) => {
  return res.send("hello").end();
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
