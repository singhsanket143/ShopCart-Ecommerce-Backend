const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");

class ProductService {

    constructor(respository) {
        this.respository = respository
    }

    async createProduct(product) {
        try {
            const response = await this.respository.createProduct(
                product.title, product.description, product.price, product.categoryId, product.image);
            return response;
        } catch(error) {
            console.log("ProductService: ",error);
            throw new InternalServerError();
        }
    }
    
    async getProducts() {
        try {
            const response = await this.respository.getProducts();
            return response;
        } catch(error) {
            console.log("ProductService: ",error);
            throw new InternalServerError();
        }
       
    }
    
    async getProduct(id) {
        try {
            const response = await this.respository.getProduct(id);
            if(!response) {
                // we were not able to find anything
                console.log("ProductService: ", id, "not found");
                throw new NotFoundError("Product", "id", id);
            }
            return response;
        } catch(error) {
            if(error.name === "NotFoundError") {
                throw error;
            }
            console.log("ProductService: ",error);
            throw new InternalServerError();
        }
        
    }

    async destroyProduct(productId) {
        try {
            const response = await this.respository.destroyProduct(productId);
            if(!response) {
                console.log("ProductService: ", productId, "not found");
                throw new NotFoundError("Product", "id", productId);
            }
            return response;
        } catch(error) {
            if(error.name === "NotFoundError") {
                throw error;
            }
            console.log("ProductService: ",error);
            throw new InternalServerError();
        }
        
    }
}


module.exports = ProductService
