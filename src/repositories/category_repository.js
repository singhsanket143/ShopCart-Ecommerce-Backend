const { Category } = require('../models/index');

class CategoryRepository {
    async getCategories() {
        try {
            const response = await Category.findAll();
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getCategory(id) {
        try {
            const response = await Category.findByPk(id);
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async createCategory(name, description) {
        try {
            const response = await Category.create({
                name,
                description
            });
            // sample log
            return response;
        } catch(error) {
            throw error;
            
        }
    }

    async destroyCategory(categoryId) {
        try {
            const response = await Category.destroy({
                where: {
                    id: categoryId
                }
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}


module.exports = CategoryRepository;