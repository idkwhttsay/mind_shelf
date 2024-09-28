const User = require("../models/userModel");
const { response } = require("express");

const LOGGER_COLOR = process.env.LOGGER_COLOR;

const logRequest = (method, url, data) => {
  console.log(`${LOGGER_COLOR}[${method}] ${url}\x1b[0m`, data || "");
};

const findOrCreateUser = async (req, res) => {
  logRequest("POST", "/user/login", req.body);
  try {
    const user = await User.find({ userId: req.body.userId });
    if (!user) {
      const newUser = await User.create(req.body);
      res.status(200).send(newUser);
    } else {
      res.status(401).send({ message: "User already exists" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  findOrCreateUser,
};
