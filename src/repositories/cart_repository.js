const { Cart, CartProducts } = require('../models/index');
const { Op } = require('sequelize');
const NotFoundError = require('../errors//not_found_error');
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

    async getCartByUser(userId) {
        try {
            const response = await Cart.findOne({
                where: {
                    userId
                }
            });
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

    async getCartProducts(id) {
        try {
            const response = await CartProducts.findAll({
                where: {
                    cartId: id
                }
            });
            return response;
        } catch(error) {
            console.log(error);
            throw error;
        }
    }

    async clearCart(id) {
        try {
            const response = await CartProducts.destroy({
                where: {
                    cartId: id
                }
            });
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

    async updateCart(cartId, productId, shouldAddProduct = true) {
        try {
            const result = await CartProducts.findOne({
                where: {
                    [Op.and]: [
                        {cartId: cartId},
                        {productId: productId}
                    ]
                }
            });

            if(shouldAddProduct) {
                // we want to add product to a cart
                if(!result) {
                    // the product was not yet added in the cart
                    await CartProducts.create({
                        cartId,
                        productId,
                    })
                } else {
                    // the product was already in the cart and we want to increment the quantity
                    await result.increment({quantity: 1});
                }
            } else {
                // remove product from cart
                if(!result) {
                    throw new NotFoundError('Cart Product', 'Product', productId);
                }
                if(result.quantity == 1) {
                    await CartProducts.destroy({
                        where: {
                            [Op.and]: [
                                {cartId: cartId},
                                {productId: productId}
                            ]
                        }
                    })
                } else {
                    await result.increment({quantity: -1});
                }
            }

            const response = await CartProducts.findAll({
                where: {
                    cartId: cartId
                }
            });
            return {
                cartId: cartId,
                products: response
            }
        } catch(error) {
            console.log(error);
            throw error;
        }
    }
}


module.exports = CartRepository;