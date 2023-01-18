const { signUpSchema, signInSchema } = require("../validation/index");
const { UserModel } = require("../models/index");
const ApiError = require("../errors/ApiError");
const { AuthRepository } = require("../repositories/index");
const bcrypt = require("bcrypt");
class AuthController {
  async signIn(req, res) {
    try {
      const userData = req.body;
      const validatedCredentials = signInSchema.validateSync(userData, {
        abortEarly: false,
      });
      const user = await UserModel.findOne({
        where: { email: userData.email },
      });

      if (!user) {
        ApiError.badRequest("User not found");
      }

      const comparePassword = bcrypt.compareSync(
        userData.password,
        user.password
      );

      if (!comparePassword) {
        ApiError.badRequest("Wrong password");
      }

      const jwtToken = await AuthRepository.createJwt({
        id: user.id,
        email: user.email,
      });

      return res.json({ status: 200, data: jwtToken });
    } catch (error) {
      return res.status(400).json({ status: 400, error: error.errors });
    }
  }
  async signUp(req, res) {
    try {
      const { body } = req;
      const candidate = await UserModel.findOne({
        where: { email: body.email },
      });
      const data = signUpSchema.validateSync(body, { abortEarly: false });
      if (candidate) {
        ApiError.badRequest("User already has been created");
      }

      const newUser = await AuthRepository.createUser(data);
      res.status(200).json({
        status: 200,
        title: "You've successfully created account",
        data: newUser,
      });
    } catch (error) {
      return res
        .status(400)
        .json({ status: error.status || 400, error: error.errors });
    }
  }
}

module.exports = new AuthController();
