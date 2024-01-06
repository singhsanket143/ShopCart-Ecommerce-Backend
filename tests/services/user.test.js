const { UserRepository, CartRepository } = require('../../src/repositories');
const UserService = require('../../src/services/user_service');
const AuthUtils = require('../../src/utils/auth');
const bcrypt = require('bcrypt');

jest.mock('../../src/repositories/user_repository');
jest.mock('../../src/repositories/cart_repository');
jest.mock('../../src/utils/auth');

const mockUser = {
    id: 1,
    email: 'a@b.com',
    password: '5678dhjkl',
    createdAt: '2022-12-12',
    updatedAt: '2022-12-12'
};


describe('Tests for user service signin method', () => {

    beforeAll(() => {
       jest.clearAllMocks();
        
    });

    test('should return valid jwt token', async () => {
        // Prepare. 
        UserRepository.mockImplementation(() => {
            return {
                getUserByEmail: (email) => {
                    return mockUser;
                },
                getUsers: () => {
                    return [mockUser];
                },
                getUser: (id) => {  
                    return mockUser;
                },
            }
        });

        AuthUtils.generateJWT.mockImplementation(() => 'token');
        console.log(AuthUtils.generateJWT());
        jest.spyOn(bcrypt, 'compareSync').mockImplementation(() => true);
        const userService = new UserService(new UserRepository(), new CartRepository());
        
        // Act.
        const response = await userService.signinUser({email: 'a@b.com', password: '12345'});

        // Assert.
        expect(response).toBe('token');
    });


    test('should throw UnauthorizedError for password mismatch', async () => {
        // Prepare. 
        UserRepository.mockImplementation(() => {
            return {
                getUserByEmail: (email) => {
                    return mockUser;
                },
                getUsers: () => {
                    return [mockUser];
                },
                getUser: (id) => {  
                    return mockUser;
                },
            }
        });

        AuthUtils.generateJWT.mockImplementation(() => 'token');
        jest.spyOn(bcrypt, 'compareSync').mockImplementation(() => false);
        const userService = new UserService(new UserRepository(), new CartRepository());
        
        try {
            // Act.
            const response = await userService.signinUser({email: 'a@b.com', password: '12345'});
        } catch(error) {
            expect(error.name).toBe("UnauthorizedError")
        }
    
    });

    test('should throw NotFoundError for invalid user', async () => {
        // Prepare. 
        UserRepository.mockImplementation(() => {
            return {
                getUserByEmail: (email) => {
                    return undefined;
                },
                getUsers: () => {
                    return [];
                },
                getUser: (id) => {  
                    return undefined;
                },
            }
        });

        AuthUtils.generateJWT.mockImplementation(() => 'token');
        jest.spyOn(bcrypt, 'compareSync').mockImplementation(() => true);
        const userService = new UserService(new UserRepository(), new CartRepository());
        
        try {
            // Act.
            const response = await userService.signinUser({email: 'a@b.com', password: '12345'});
        } catch(error) {
            expect(error.name).toBe("NotFoundError")
        }
    
    });
});