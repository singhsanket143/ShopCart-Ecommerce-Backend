const { User } = require('../models/index');

class UserRepository {

    UserRepository() {
        console.log("Default constructor of actual user repository called");
    }

    async getUsers() {
        try {
            const response = await User.findAll();
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getUser(id) {
        try {
            const response = await User.findByPk(id);
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const response = await User.findOne({
                where: {
                    email: email
                }
            })
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async createUser(email, password) {
        try {
            const response = await User.create({
                email,
                password
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async destroyUser(userId) {
        try {
            const response = await User.destroy({
                where: {
                    id: userId
                }
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}


module.exports = UserRepository;