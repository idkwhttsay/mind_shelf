const express = require("express");
const {
  getUserById,
  getAllUsers,
  registerUser,
  loginUser,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", getUserById);
userRouter.get("/", getAllUsers);

module.exports = userRouter;
