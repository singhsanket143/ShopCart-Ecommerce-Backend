const { Order, OrderProducts } = require('../models/index');

class OrderRepository {
    async getOrders() {
        try {
            const response = await Order.findAll();
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async getOrder(id) {
        try {
            const response = await Order.findByPk(id);
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async createOrder(userId, status) {
        try {
            const response = await Order.create({
                userId,
                status
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async addOrderProductsInBulk(orderProducts) {
        try {
            const response = await OrderProducts.bulkCreate(orderProducts);
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}


module.exports = OrderRepository;