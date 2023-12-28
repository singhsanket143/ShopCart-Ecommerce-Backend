const { Cart } = require('../models/index');

class CartRepository {
    async getCarts() {
        try {
            const response = await Cart.findAll();
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getCart(id) {
        try {
            const response = await Cart.findByPk(id);
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async createCart(userId) {
        try {
            const response = await Cart.create({
                userId
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async destroyCart(cartId) {
        try {
            const response = await Cart.destroy({
                where: {
                    id: cartId
                }
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}


module.exports = CartRepository;