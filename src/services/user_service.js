const BadRequest = require("../errors/bad_request_error");
const ConflictError = require("../errors/conflict_error");
const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");
const bcrypt = require('bcrypt');
const UnauthorizedError = require("../errors/unauthorized_error");
const { generateJWT } = require("../utils/auth");
class UserService {

    constructor(respository, cartRepository) {
        this.respository = respository;
        this.cartRepository = cartRepository;
    }


    async createUser(user) {
        try {
            const response = await this.respository.createUser(user.email, user.password);
            await this.cartRepository.createCart(response.id);
            return response;
        } catch(error) {
            console.log("UserService: ", error.name);
            if(error.name === "SequelizeUniqueConstraintError") {
                throw new ConflictError("User", error.errors[0].message)
            }
            if(error.name === "SequelizeValidationError") {
                let propertiesHavingValidationIssue = "";
                let reason = [];
                error.errors.forEach((err) => {
                    propertiesHavingValidationIssue += err.path + ", ";
                    reason.push(err.message);
                });

                throw new BadRequest(propertiesHavingValidationIssue, true, reason);
            }
            console.log("UserService: ",error);
            throw new InternalServerError();
        }
        
    }

    async signinUser(userRequestObject) {
        try {
            const user = await this.respository.getUserByEmail(userRequestObject.email);
            if(!user) {
                console.log("UserService: ", userRequestObject.email, "not found");
                throw new NotFoundError("User", "email", userRequestObject.email);
            }
            const doesPasswordMatch = bcrypt.compareSync(userRequestObject.password, user.password);
            if(!doesPasswordMatch) {
                throw new UnauthorizedError();
            }
            const result = generateJWT({email: user.email, id: user.id});
            console.log("Generating jwt", result)

            return result;
        } catch(error) {
            console.log("UserService: ",error);
            if(error.name === "NotFoundError" || error.name === "UnauthorizedError") {
                throw error;
            }
            throw new InternalServerError();
        }
    }

    async getAllUsers() {
        try {
            const response = await this.respository.getUsers();
            return response;
        } catch(error) {
            console.log("UserService: ",error);
            throw new InternalServerError();
        }
        
    }

    async getUser(userId) {
        try {
            const response = await this.respository.getUser(userId);
            if(!response) {
                // we were not able to find anything
                console.log("UserService: ", userId, "not found");
                throw new NotFoundError("User", "id", userId);
            }
            return response;
        } catch(error) {
            if(error.name === "NotFoundError") {
                throw error;
            }
            console.log("UserService: ",error);
            throw new InternalServerError();
        }
        
    }

    async destroyUser(userId) {
        try {
            const response = await this.respository.destroyUser(userId);
            if(!response) {
                // we were not able to find anything
                console.log("UserService: ", userId, "not found");
                throw new NotFoundError("User", "id", userId);
            }
            return response;
        } catch(error) {
            if(error.name === "NotFoundError") {
                throw error;
            }
            console.log("UserService: ",error);
            throw new InternalServerError();
        }
        
    }
    
}


module.exports = UserService;
