import {UserModel} from "../model/userModel";

export const createUser = async (req, res) => {
  const {email, password, phoneNumber, address, isVerified} = req.body;
  try {
    const user = await UserModel.create({
      email: email,
      password: password,
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
