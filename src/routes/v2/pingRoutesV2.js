const express = require('express');

const { pingControllerV2 } = require('../../controllers/pingController');

const pingRouterV2 = express.Router();


pingRouterV2.get('/', pingControllerV2); // mapping a route to a controller


module.exports = pingRouterV2;