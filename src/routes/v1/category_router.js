const express = require('express');

const { createCategory, getAllCategories, getCategory } = require('../../controllers/category_controller');

const categoryRouter = express.Router();


categoryRouter.post('/', createCategory); // mapping a route to a controller
categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getCategory);
// GET /api/v1/categories/:id -> 
// GET /api/v1/categories -> all categories

module.exports = categoryRouter;