const express = require('express');

const { OrderController } = require('../../controllers/index');
const { isLoggedIn } = require('../../middlewares/auth_middlewares');


const { createOrder, getOrder }  = OrderController;

const orderRouter = express.Router();


orderRouter.post('/', isLoggedIn, createOrder); // mapping a route to a controller
orderRouter.get('/:id', isLoggedIn, getOrder);
module.exports = orderRouter;