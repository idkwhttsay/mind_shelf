const express = require("express");
const { getAllMessages, addMessage } = require("../controllers/chatController");

const chatRouter = express.Router();

chatRouter.get("/", getAllMessages);
chatRouter.post("/", addMessage);

module.exports = chatRouter;
