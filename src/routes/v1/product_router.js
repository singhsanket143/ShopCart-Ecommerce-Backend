const express = require('express');

const { createProduct, getProducts, getProduct } = require('../../controllers/product_controller');
const { createProductValidator } = require('../../middlewares/product_middlewares');

const productRouter = express.Router();


productRouter.post('/', createProductValidator, createProduct); // mapping a route to a controller
productRouter.get('/', getProducts); // mapping a route to a controller
productRouter.get('/:id', getProduct);

module.exports = productRouter;