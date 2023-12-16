class CategoryService {

    constructor(respository) {
        this.respository = respository
    }

    async createCategory(category) {
        const response = await this.respository.createCategory(category.name, category.description);
        return response;
    }

    async getAllCategories() {
        const response = await this.respository.getCategories();
        return response;
    }

    async getCategory(categoryId) {
        const response = await this.respository.getCategory(categoryId);
        return response;
    }
    
}


module.exports = CategoryService
