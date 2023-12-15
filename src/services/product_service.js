// in memory db

const products = [];

class ProductService {

    constructor(respository) {
        this.respository = respository
    }

    createProduct(product) {
        const newProduct = {
            id: products.length,
            ...product
        }
        products.push(newProduct);
        return newProduct;
    }
    
    async getProducts() {
        const response = await this.respository.getProducts();
        return response.data;
    }
    
    getProduct(id) {
        return products.filter(product => product.id == id)[0];
    }
}


module.exports = ProductService
