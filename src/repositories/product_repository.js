const { Product } = require('../models/index');

class ProductRepository {
    async getProducts() {
        try {
            const response = await Product.findAll();
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getProduct(id) {
        try {
            const response = await Product.findByPk(id);
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async createProduct(title, description, price, categoryId, image) {
        try {
            const response = await Product.create({
                title, description, price, categoryId, image
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async destroyProduct(productId) {
        try {
            const response = await Product.destroy({
                where: {
                    id: productId
                }
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getProductsForCategory(categoryId) {
        try {
            const response = await Product.findAll({
                where: {
                    categoryId: categoryId
                }
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async destroyProduct(productId) {
        try {
            const response = await Product.destroy({
                where: {
                    id: productId
                }
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
    
}


module.exports = ProductRepository;