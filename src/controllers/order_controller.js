const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const { OrderService }  = require('../services/index');
const { OrderRepository, CartRepository } = require('../repositories/index');

const errorResponse = require('../utils/error_response');

const orderService = new OrderService(new OrderRepository(), new CartRepository());

async function createOrder(req, res) {

    try {
        const response = await orderService.createOrder(req.user.id);
    
        return res
                .status(StatusCodes.CREATED)
                .json({
                    sucess: true,
                    error: {},
                    message: "Created Order successfully",
                    data: response
        });

    } catch(error) {
        console.log("OrderController: Something went wrong", error);
        return res
                .status(error.statusCode)
                .json(errorResponse(error.reason, error));
    }

}

async function getOrder(req, res) {

    try {
        const response = await orderService.fetchOrderDetails(req.user.id, req.params.id);
    
        return res
                .status(StatusCodes.OK)
                .json({
                    sucess: true,
                    error: {},
                    message: "Fetched Order successfully",
                    data: response
        });

    } catch(error) {
        console.log("OrderController: Something went wrong", error);
        return res
                .status(error.statusCode)
                .json(errorResponse(error.reason, error));
    }

}

module.exports = {
    createOrder,
    getOrder
}