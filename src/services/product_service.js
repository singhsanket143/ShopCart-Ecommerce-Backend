class ProductService {

    constructor(respository) {
        this.respository = respository
    }

    async createProduct(product) {
        const response = await this.respository.createProduct(
            product.title, product.description, product.price, product.categoryId, product.image);
        return response;
    }
    
    async getProducts() {
        const response = await this.respository.getProducts();
        return response;
    }
    
    async getProduct(id) {
        const response = await this.respository.getProduct(id);
        return response;
    }
}


module.exports = ProductService
