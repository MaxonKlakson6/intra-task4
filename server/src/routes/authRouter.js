const { Router } = require("express");
const authController = require("../controllers/AuthController");

const authRouter = new Router();

authRouter.post("/sign-up", authController.signUp);
authRouter.patch("/sign-in", authController.signIn);

module.exports = authRouter;
