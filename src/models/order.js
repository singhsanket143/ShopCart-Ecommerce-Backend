const Sequelize = require('sequelize');
const db = require('../config/db_config');

// https://sequelize.org/docs/v7/models/data-types/
const Order = db.define('order', {
    status: {
        type: Sequelize.ENUM({
            values: ['pending', 'cancelled', 'succesfull']
        }),
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id'
        }
    }
});


module.exports = Order;