const express = require('express');

const { UserController } = require('../../controllers/index');


const { createUser }  = UserController;

const userRouter = express.Router();


userRouter.post('/signup', createUser); // mapping a route to a controller
   
module.exports = userRouter;