class CategoryService {

    constructor(respository) {
        this.respository = respository
    }

    async createCategory(category) {
        const response = await this.respository.createCategory(category.name, category.description);
        return response;
    }
    
}


module.exports = CategoryService
