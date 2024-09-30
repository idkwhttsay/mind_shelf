const User = require("../models/userModel");
const { logRequest } = require("../logger/logger");

const registerUser = async (req, res) => {
  logRequest("POST-request", "/user/register", req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const newUser = await User.create(req.body);
      logRequest("POST-response", "/user/register", newUser);
      res.status(200).send(newUser);
    } else {
      res.status(400).send({ message: "User already exists" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  logRequest("POST-request", "/user/login", req.body);
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json({ message: "Wrong email or password" });
      return;
    }

    if (user.password === req.body.password) {
      logRequest("POST-response", "/user/login", user);
      res.status(200).send(user);
    } else {
      res.status(400).send({ message: "Wrong email or password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  logRequest("POST-request", "/user/", req.body);
  try {
    const users = await User.find({});
    logRequest("POST-response", "/user/", users);
    res.status(200).send(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  logRequest("GET-request", `/user/${id}`, req.body);
  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(401).json({ message: "User not found" });
      return;
    }

    logRequest("GET-response", `/user/${id}`, user);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
};
