import {CategoryModel} from "../model/foodCategoryModel.js";

export const createFoodCategory = async (req, res) => {
  const {name} = req.body;
  try {
    const foodCategory = await CategoryModel.create({
      name: name,
    });
    return res
      .status(200)
      .send({
        success: true,
        foodCategory: foodCategory,
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

export const getFoodCategories = async (_, res) => {
  try {
    const foodCategory = await CategoryModel.find();
    return res
      .status(200)
      .send({
        success: true,
        foodCategory: foodCategory,
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
export const getFoodCategoryById = async (req, res) => {
  const {id} = req.params;
  try {
    const foodCategory = await CategoryModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        foodCategory: foodCategory,
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
