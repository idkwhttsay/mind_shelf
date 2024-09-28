const express = require('express');
const {addUser} = require('../controllers/userController')

const userRouter = express.Router()

userRouter.post('/login', addUser);

module.exports = userRouter;