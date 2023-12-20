const express = require('express');

const { ProductController } = require('../../controllers/index');

const { createProduct, getProducts, getProduct, destroyProduct } = ProductController;
const { createProductValidator } = require('../../middlewares/product_middlewares');

const productRouter = express.Router();


productRouter.post('/', createProductValidator, createProduct); // mapping a route to a controller
productRouter.get('/', getProducts); // mapping a route to a controller
productRouter.get('/:id', getProduct);
productRouter.delete('/:id', destroyProduct);
module.exports = productRouter;