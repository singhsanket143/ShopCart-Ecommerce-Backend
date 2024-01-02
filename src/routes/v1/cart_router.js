const express = require('express');

const { CartController } = require('../../controllers/index');
const { isLoggedIn } = require('../../middlewares/auth_middlewares');


const { updateCart, getCartProducts , clearCart }  = CartController;

const cartRouter = express.Router();


cartRouter.patch('/:id', isLoggedIn, updateCart); // mapping a route to a controller
cartRouter.get('/:id/products', isLoggedIn, getCartProducts);
cartRouter.delete('/:id/products', isLoggedIn, clearCart);
module.exports = cartRouter;