const User = require("../models/userModel");
const { logRequest } = require("../logger/logger");

const findOrCreateUser = async (req, res) => {
  logRequest("POST-request", "/user/login", req.body);
  try {
    const user = await User.find({ userId: req.body.userId });
    if (!user) {
      const newUser = await User.create(req.body);
      logRequest("POST-response", "/user/login", newUser);
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
