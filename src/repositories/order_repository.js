const { Order, OrderProducts, Product } = require('../models/index');

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

    async fetchOrderDetails(orderId) {
        try {
            const response = await Order.findOne({
                where: {
                    id: orderId
                },
                include: {
                    model: Product,
                    attributes: ['title', 'id', 'price', 'image'],
                    through: {
                        model: OrderProducts,
                        attributes: ['quantity']
                    }
                },
                attributes: ['id', 'status', 'createdAt', 'updatedAt'],
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}


module.exports = OrderRepository;