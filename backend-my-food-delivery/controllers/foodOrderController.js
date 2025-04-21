import {foodOrderModel} from "../model/foodOrderModel.js";

export const createFoodOrder = async (req, res) => {
  const {totalPrice} = req.body;
  try {
    const foodOrder = await foodOrderModel.create({
      totalPrice: totalPrice,
    });
    return res
      .status(200)
      .send({
        success: true,
        foodOrder: foodOrder,
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
