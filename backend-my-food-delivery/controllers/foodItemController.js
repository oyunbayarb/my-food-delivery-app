import {Types} from "mongoose";
import {CategoryModel} from "../model/foodCategoryModel.js";
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
    const foodItems = await foodItemModel.find().populate("category");
    return res
      .status(200)
      .send({
        success: true,
        foodItems: foodItems,
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

export const getFoodItemsById = async (req, res) => {
  const {id} = req.params;
  try {
    const food = await foodItemModel.findById(id).populate("category");
    return res
      .status(200)
      .send({
        succes: true,
        food: food,
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

export const getFoodsByCategoryId = async (req, res) => {
  const {categoryID} = req.params;
  try {
    const foodsByCategory = await foodItemModel
      .find({category: categoryID})
      .populate("category");
    // const category = await CategoryModel.findById(categoryID);
    return res
      .status(200)
      .send({
        succes: true,
        // category: category,
        foodsByCategory: foodsByCategory,
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
export const getAllFoodsCategoryById = async (req, res) => {
  const {categoryID} = req.query;
  const match = categoryID;
  const filter = match
    ? {
        $match: {_id: new Types.ObjectId(match)},
      }
    : {
        $match: {},
      };
  try {
    const food = await CategoryModel.aggregate([
      filter,
      {
        $lookup: {
          from: "foodlists",
          localField: "_id",
          foreignField: "category",
          as: "foods",
        },
      },
      {$project: {name: 1, foods: 1}},
    ]);
    return res
      .status(200)
      .send({
        success: true,
        food: food,
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
