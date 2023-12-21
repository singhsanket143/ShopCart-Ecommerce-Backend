const { Product } = require('../models/index');
const { Op } = require('sequelize');
class ProductRepository {
    async getProducts(limit, offset, min_price, max_price) {
        try {
            const filter = {};
            if(limit) {
                filter.limit = limit;
            }
            if(offset) {
                filter.offset = offset;
            }
            const minValue = (min_price) ? min_price : Number.MIN_SAFE_INTEGER;
            const maxValue = (max_price) ? max_price : Number.MAX_SAFE_INTEGER;
            const response = await Product.findAll({
                where: {
                    price: {
                        [Op.between]: [minValue, maxValue]
                    }
                },
                ...filter
            });
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

    async searchProduct(searchQuery) {
        try {
            const response = await Product.findAll({
                where: {
                    title: {
                        [Op.like]: `%${searchQuery}%`
                    }
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