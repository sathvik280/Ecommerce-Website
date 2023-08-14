const express = require('express');
const userRouter = express.Router();

const verifyToken = require('../middleware/authorizeUser');

const { updateUserCartAndOrdersHistory } = require('../controllers/userController');

userRouter.patch('/', verifyToken, updateUserCartAndOrdersHistory);

module.exports = userRouter;