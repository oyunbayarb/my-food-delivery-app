import mongoose from "mongoose";

const foodOrderSchema = new mongoose.Schema({
  totalPrice: Number,
  role: {
    type: String,
    enum: ["Pending", "Canceled", "Delivered"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const foodOrderModel = mongoose.model("Food Order", foodOrderSchema);
