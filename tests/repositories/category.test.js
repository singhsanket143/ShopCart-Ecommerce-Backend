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

describe('Tests for category repository getCategory', () => {
    test('Should get one category', async () => {
        // Prepare.
        const repository = new CategoryRepository();

        jest.spyOn(Category, 'findByPk').mockImplementation(() => mockCategory);

        // Act.
        const response = await repository.getCategory(1);

        // Expect / Assert
        expect(response.name).toBe('Fashion');
        expect(response.description).toBe('Fashion related products');
    });

    test('Should not get a category and throws error', async () => {
        // Prepare.
        const repository = new CategoryRepository();

        jest.spyOn(Category, 'findByPk').mockImplementation(() => {
            throw mockError;
        });

        try {
            // Act.
            const response = await repository.getCategory(1);
            expect(response).toThrow();
        } catch(error) {
            // Expect / Assert
            expect(error).toBe(mockError);
        }

        
    });
});

describe('Tests for category repository getCategories', () => {
    test('Should get all categories', async () => {
        // Prepare.
        const repository = new CategoryRepository();

        jest.spyOn(Category, 'findAll').mockImplementation(() => [mockCategory]);

        // Act.
        const response = await repository.getCategories();

        // Expect / Assert
        expect(response).toHaveLength(1);
        expect(response).toContain(mockCategory);
    });

    test('Should not get all categories and throws error', async () => {
        // Prepare.
        const repository = new CategoryRepository();

        jest.spyOn(Category, 'findAll').mockImplementation(() => {
            throw mockError;
        });

        try {
            // Act.
            const response = await repository.getCategories();
            expect(response).toThrow();
        } catch(error) {
            // Expect / Assert
            expect(error).toBe(mockError);
        }

        
    });
});

describe('Tests for category repository destroyCategory', () => {
    test('Should delete one category', async () => {
        // Prepare.
        const repository = new CategoryRepository();

        jest.spyOn(Category, 'destroy').mockImplementation(() => true);

        // Act.
        const response = await repository.destroyCategory(1);

        // Expect / Assert
        expect(response).toBe(true);
    });

    test('Should not delete a category and throws error', async () => {
        // Prepare.
        const repository = new CategoryRepository();

        jest.spyOn(Category, 'destroy').mockImplementation(() => {
            throw mockError;
        });

        try {
            // Act.
            const response = await repository.destroyCategory(1);
            expect(response).toThrow();
        } catch(error) {
            // Expect / Assert
            expect(error).toBe(mockError);
        }

        
    });
});