import express, {json} from "express";
import cors from "cors";
import {connectMongoDB} from "./connectDb.js";
import {foodCategoryRouter} from "./routes/foodCategoryRouter.js";
import {createUserRouter} from "./routes/userRouter.js";
import {foodItemRouter} from "./routes/foodItemRouter.js";
import {foodOrderRouter} from "./routes/foodOrderRouter.js";
import {authRouter} from "./routes/auth.js";

const port = process.env.PORT;
const app = express();

connectMongoDB();
app.use(cors());
app.use(json());

app.use("/foodCategory", foodCategoryRouter);
app.use("/user", createUserRouter);
app.use("/foodItem", foodItemRouter);
app.use("/foodOrder", foodOrderRouter);
app.use("/login", authRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
