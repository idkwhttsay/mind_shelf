const express = require("express");
const {
  findOrCreateUser,
  getUserById,
  getAllUsers,
} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/login", findOrCreateUser);
userRouter.get("/:id", getUserById);
userRouter.get("/", getAllUsers);

module.exports = userRouter;
