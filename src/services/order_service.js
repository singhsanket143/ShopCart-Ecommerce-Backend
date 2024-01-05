const InternalServerError = require("../errors/internal_server_error");
const NotFoundError = require("../errors/not_found_error");

class OrderService {

    constructor(respository, cartRepository) {
        this.respository = respository;
        this.cartRepository = cartRepository;
    }

    async createOrder(userId) {
        try {
            // 1. Check if there is a cart for the user or not ?
            const cart = await this.cartRepository.getCartByUser(userId);
            if(!cart) {
                throw new NotFoundError('Cart', 'user id', userId);
            }
            const cartProducts = await cart.getProducts();
            console.log("Cart products: ", cartProducts);
            if(cartProducts.length == 0) {
                throw new InternalServerError();
            }
            // 2. Create a new empty order
            const order = await this.respository.createOrder(userId, 'pending');

            // 3. For the above order, add order products
            const orderProductsBulkCreateArray = cartProducts.map(product => {
                return {
                    orderId: order.id,
                    productId: product.id,
                    quantity: product.cart_products.quantity
                }
            })
            console.log("Order Products to be created: ", orderProductsBulkCreateArray);
            const orderProducts = await this.respository.addOrderProductsInBulk(
                orderProductsBulkCreateArray
            );

            // Once order products are created, we should mark the order status as successfull

            order.status = "succesfull";
            await order.save();

            await this.cartRepository.clearCart(cart.id);

            return {
                orderId: order.id,
                products: orderProducts
            }

        } catch(error) {
            if(error.name === "NotFoundError" || error.name === "UnauthorizedError") {
                throw error;
            }
            console.log("OrderService: ",error);
            throw new InternalServerError();
        }
        
    }

    async fetchOrderDetails(userId, orderId) {
        try {
            const orderObject = await this.respository.getOrder(orderId);
            if(!orderObject) {
                throw new NotFoundError('Order', 'order id', orderId);
            }
            if(orderObject.userId != userId) {
                throw new UnauthorizedError('You are not authorised to do the current operation');
            }
            const response = await this.respository.fetchOrderDetails(orderId);
            const order = {id: response.id, status: response.status, createdAt: response.createdAt, updatedAt: response.updatedAt};
            let totalOrderValue = 0;
            order.products = response.products.map(product => {
                totalOrderValue += product.price * product.order_products.quantity;
                return {
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    id: product.id,
                    quantity: product.order_products.quantity
                }
            });
            order.totalOrderValue = totalOrderValue;
            return order;
        } catch(error) {
            if(error.name === "NotFoundError" || error.name === "UnauthorizedError") {
                throw error;
            }
            console.log("OrderService: ",error);
            throw new InternalServerError();
        }
    }
}


module.exports = OrderService
