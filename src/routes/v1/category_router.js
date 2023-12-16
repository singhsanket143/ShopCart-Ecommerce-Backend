const express = require('express');

const { createCategory } = require('../../controllers/category_controller');

const categoryRouter = express.Router();


categoryRouter.post('/', createCategory); // mapping a route to a controller

// GET /api/v1/categories/:id -> 
// GET /api/v1/categories -> all categories

module.exports = categoryRouter;