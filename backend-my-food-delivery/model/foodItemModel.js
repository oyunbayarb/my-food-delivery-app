import mongoose, {Schema} from "mongoose";

const foodItemSchema = new mongoose.Schema({
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: {type: Schema.Types.ObjectId, ref: "Category", required: true},
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const foodItemModel = mongoose.model("Food list", foodItemSchema);
