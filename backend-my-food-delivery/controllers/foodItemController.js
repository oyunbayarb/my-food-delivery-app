import {foodItemModel} from "../model/foodItemModel.js";

export const createFoodItem = async (req, res) => {
  const {foodName, price, image, ingredients, category} = req.body;
  try {
    const foodItem = await foodItemModel.create({
      foodName: foodName,
      price: price,
      image: image,
      ingredients: ingredients,
      category: category,
    });
    return res
      .status(200)
      .send({
        success: true,
        foodItem: foodItem,
      })
      .end();
  } catch (error) {
    console.error(error, "error");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
export const getFoodItems = async (req, res) => {
  try {
    const foodItems = await foodItemModel.find();
    return res
      .status(200)
      .send({
        success: true,
        foodItems: foodItems,
      })
      .end();
  } catch (error) {
    console.error(error, "error");
    return res.status(400).send({
      success: false,
      message: error,
    });
  }
};
