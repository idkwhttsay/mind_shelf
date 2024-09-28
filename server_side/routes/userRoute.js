const express = require("express");
const { findOrCreateUser } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/login", findOrCreateUser);

module.exports = userRouter;
