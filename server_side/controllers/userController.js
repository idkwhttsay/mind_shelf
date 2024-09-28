const User = require("../models/userModel");

const addUser = (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addUser,
};
