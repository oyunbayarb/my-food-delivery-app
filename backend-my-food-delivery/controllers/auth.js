import {UserModel} from "../model/userModel.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const {email, password} = req.body;
  try {
    const user = await UserModel.findOne({email: email});
    const pass = await bcrypt.compare(password, user.password);
  } catch (error) {}
};
