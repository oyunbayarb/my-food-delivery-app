import {UserModel} from "../model/userModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const {email, password, phoneNumber, address, isVerified} = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await UserModel.create({
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      address: address,
      isVerified: isVerified,
    });
    return res
      .status(200)
      .send({
        success: true,
        user: user,
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
export const getAllUsers = async (req, res) => {
  try {
    await UserModel.find({email: email});

    if (oldUser.length > 0)
      return res
        .status(405)
        .send.send({
          success: false,
          message: "user already created",
        })
        .end();

    const users = await UserModel.find().select(`-password`);
    return res
      .status(200)
      .send({
        success: true,
        users: users,
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
