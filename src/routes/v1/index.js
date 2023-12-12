const express = require('express');

const v1Router = express.Router();

const pingRouter = require('./ping_router');
const productsRouter = require('./product_router');

// Any new api if we have to introduce we should just register it here if it is
// a V1 api

v1Router.use('/ping', pingRouter)
v1Router.use('/products', productsRouter)


module.exports = v1Router;