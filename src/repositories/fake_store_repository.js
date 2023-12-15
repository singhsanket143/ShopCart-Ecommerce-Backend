const { default: axios } = require("axios");

class FakeStoreRepository {
    async getProducts() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            return response.data;
        } catch(error) {
            console.log(error);
        }
    }

    async getProduct(id) {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/'+id);
            return response.data;
        } catch(error) {
            console.log(error);
        }
    }

    async createProduct(product) {
        try {
            const response = await axios.post('https://fakestoreapi.com/products', product);
            return response.data;
        } catch(error) {
            console.log(error);
        }
    }
    
}


module.exports = FakeStoreRepository;