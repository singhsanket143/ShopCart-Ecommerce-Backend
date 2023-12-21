const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const { ProductService } = require('../services/index');
const { ProductRepository } = require('../repositories/index');
const errorResponse = require('../utils/error_response');

const productService = new ProductService(new ProductRepository());

async function createProduct(req, res) {

    try {
        
        const response = await productService.createProduct(req.body);
    
        return res
                .status(StatusCodes.CREATED)
                .json({
                    sucess: true,
                    error: {},
                    message: ReasonPhrases.CREATED + " Product",
                    data: response
        });

    } catch(error) {
        console.log("ProductController: Something went wrong", error);
        return res
                .status(error.statusCode)
                .json(errorResponse(error.reason, error));
    }

}

async function getProducts(req, res) {
    try {
        const response = await productService.getProducts(req.query);
        return res
                .status(StatusCodes.OK)
                .json({
                    sucess: true,
                    error: {},
                    message: "Successfully fetched the Products",
                    data: response
        });
    } catch(error) {
        console.log("ProductController: Something went wrong", error);
        return res
                .status(error.statusCode)
                .json(errorResponse(error.reason, error));
    }
}


async function getProduct(req, res) { // /api/v1/products/2
    try {
        const response = await productService.getProduct(req.params.id);
        return res
                .status(StatusCodes.OK)
                .json({
                    sucess: true,
                    error: {},
                    message: "Successfully fetched the Product",
                    data: response
        });
    } catch(error) {
        console.log("ProductController: Something went wrong", error);
        return res
                .status(error.statusCode)
                .json(errorResponse(error.reason, error));
    }
}

async function destroyProduct(req, res) {

    try {
        
        const response = await productService.destroyProduct(req.params.id);
    
        return res
                .status(StatusCodes.OK)
                .json({
                    sucess: true,
                    error: {},
                    message: "Successfully deleted Product",
                    data: response
        });

    } catch(error) {
        console.log("ProductController: Something went wrong", error);
        return res
                .status(error.statusCode)
                .json(errorResponse(error.reason, error));
    }

}


module.exports = {
    createProduct,
    getProducts,
    getProduct,
    destroyProduct
}