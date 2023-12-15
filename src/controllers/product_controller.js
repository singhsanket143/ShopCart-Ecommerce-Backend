const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const ProductService = require('../services/product_service');
const FakeStoreRepository = require('../repositories/fake_store_repository');

const productService = new ProductService(new FakeStoreRepository());

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
        console.log("Something went wrong", error);
    }

}

async function getProducts(req, res) {
    try {
        const response = await productService.getProducts();
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
        console.log("Something went wrong", error);
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct
}