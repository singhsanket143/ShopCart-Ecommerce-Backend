const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");

class CategoryService {

    constructor(respository, productRepository) {
        this.respository = respository;
        this.productRepository = productRepository;
    }

    async getProductsForCategory(categoryId) {
        try {
            await this.getCategory(categoryId);
            const response = await this.productRepository.getProductsForCategory(categoryId);
            return response;
        } catch(error) {
            if(error.name === "NotFoundError") {
                throw error;
            }
            console.log("CategorySerice: ",error);
            throw new InternalServerError();
        }
    }

    async createCategory(category) {
        try {
            const response = await this.respository.createCategory(category.name, category.description);
            return response;
        } catch(error) {
            console.log("CategorySerice: ",error);
            throw new InternalServerError();
        }
        
    }

    async getAllCategories() {
        try {
            const response = await this.respository.getCategories();
            return response;
        } catch(error) {
            console.log("CategorySerice: ",error);
            throw new InternalServerError();
        }
        
    }

    async getCategory(categoryId) {
        try {
            const response = await this.respository.getCategory(categoryId);
            if(!response) {
                // we were not able to find anything
                console.log("CategoryService: ", categoryId, "not found");
                throw new NotFoundError("Category", "id", categoryId);
            }
            return response;
        } catch(error) {
            if(error.name === "NotFoundError") {
                throw error;
            }
            console.log("CategorySerice: ",error);
            throw new InternalServerError();
        }
        
    }

    async destroyCategory(categoryId) {
        try {
            const response = await this.respository.destroyCategory(categoryId);
            if(!response) {
                // we were not able to find anything
                console.log("CategoryService: ", categoryId, "not found");
                throw new NotFoundError("Category", "id", categoryId);
            }
            return response;
        } catch(error) {
            if(error.name === "NotFoundError") {
                throw error;
            }
            console.log("CategorySerice: ",error);
            throw new InternalServerError();
        }
        
    }
    
}


module.exports = CategoryService
