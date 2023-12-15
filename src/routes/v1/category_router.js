const express = require('express');

const { createCategory } = require('../../controllers/category_controller');

const categoryRouter = express.Router();


categoryRouter.post('/', createCategory); // mapping a route to a controller

module.exports = categoryRouter;