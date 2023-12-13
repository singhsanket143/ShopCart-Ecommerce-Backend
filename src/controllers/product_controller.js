const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const ProductService = require('../services/product_service');

function createProduct(req, res) {

    try {
        
        const response = ProductService.createProduct(req.body);
    
        return res
                .status(StatusCodes.CREATED)
                .json({
                    sucess: true,
                    error: {},
                    message: ReasonPhrases.CREATED + " Product",
                    data: response
        });

    } catch(error) {
        console.log("Something went wrong", error);
    }

}

function getProducts(req, res) {
    try {
        const response = ProductService.getProducts();
        return res
                .status(StatusCodes.OK)
                .json({
                    sucess: true,
                    error: {},
                    message: "Successfully fetched the Products",
                    data: response
        });
    } catch(error) {
        console.log("Something went wrong", error);
    }
}


function getProduct(req, res) { // /api/v1/products/2
    try {
        const response = ProductService.getProduct(req.params.id);
        return res
                .status(StatusCodes.OK)
                .json({
                    sucess: true,
                    error: {},
                    message: "Successfully fetched the Product",
                    data: response
        });
    } catch(error) {
        console.log("Something went wrong", error);
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct
}