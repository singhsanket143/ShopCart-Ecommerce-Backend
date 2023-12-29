const express = require('express');

const { CartController } = require('../../controllers/index');
const { isLoggedIn } = require('../../middlewares/auth_middlewares');


const { updateCart }  = CartController;

const cartRouter = express.Router();


cartRouter.patch('/:id', isLoggedIn, updateCart); // mapping a route to a controller


module.exports = cartRouter;