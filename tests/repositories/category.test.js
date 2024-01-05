const { CategoryRepository } = require('../../src/repositories');
const { Category } = require('../../src/models');

const mockCategory = {
    id: 1,
    name: "Fashion",
    description: "Fashion related products",
    createdAt: "2024-01-05T16:10:56.000Z",
    updatedAt: "2024-01-05T16:10:56.000Z"
};

const mockError = {error: 'Sample error'};

describe('Tests for category repository category creation', () => {
    test('Should create a new category', async () => {
        // Prepare.
        const repository = new CategoryRepository();

        jest.spyOn(Category, 'create').mockImplementation(() => mockCategory);

        // Act.
        const response = await repository.createCategory('Fashion', 'Fashion related products');

        // Expect / Assert
        expect(response.name).toBe('Fashion');
        expect(response.description).toBe('Fashion related products');
    });

    test('Should not create a new category and throws error', async () => {
        // Prepare.
        const repository = new CategoryRepository();

        jest.spyOn(Category, 'create').mockImplementation(() => {
            throw mockError;
        });

        try {
            // Act.
            const response = await repository.createCategory('Fashion', 'Fashion related products');
            expect(response).toThrow();
        } catch(error) {
            // Expect / Assert
            expect(error).toBe(mockError);
        }

        
    });
});