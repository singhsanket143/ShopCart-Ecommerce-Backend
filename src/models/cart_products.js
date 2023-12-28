const Sequelize = require('sequelize');
const db = require('../config/db_config');

// https://medium.com/@the_ozmic/how-to-create-many-to-many-relationship-using-sequelize-orm-postgres-on-express-677753a3edb5
// https://medium.com/@tavilesa12/dealing-with-many-to-many-associations-in-sequelize-bddc34201b80

const CartProducts = db.define('cart_products', {
    cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Carts',
            key: 'id'
        }
    },
    productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Products',
            key: 'id'
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1
    }
});

module.exports = CartProducts;
