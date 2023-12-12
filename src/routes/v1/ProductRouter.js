const express = require('express');


const productRouter = express.Router();


productRouter.get('/', (req, res) => {
    return res.json({products: []});
}); // mapping a route to a controller


productRouter.post('/', (req, res) => {
    return res.json({products: []});
}); // mapping a route to a controller


module.exports = productRouter;