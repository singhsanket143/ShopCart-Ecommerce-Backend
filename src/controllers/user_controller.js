const { StatusCodes, ReasonPhrases } = require('http-status-codes');

const { UserService }  = require('../services/index');
const { UserRepository } = require('../repositories/index');

const errorResponse = require('../utils/error_response');

const userService = new UserService(new UserRepository());

async function createUser(req, res) {

    try {
        
        const response = await userService.createUser(req.body);
    
        return res
                .status(StatusCodes.CREATED)
                .json({
                    sucess: true,
                    error: {},
                    message: ReasonPhrases.CREATED + " User",
                    data: response
        });

    } catch(error) {
        console.log("UserController: Something went wrong", error);
        return res
                .status(error.statusCode)
                .json(errorResponse(error.reason, error));
    }

}

module.exports = {
    createUser
}