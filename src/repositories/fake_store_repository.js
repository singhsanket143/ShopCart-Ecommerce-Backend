const { default: axios } = require("axios");

class FakeStoreRepository {
    async getProducts() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            return response;
        } catch(error) {
            console.log(error);
        }
    }
    
}


module.exports = FakeStoreRepository;