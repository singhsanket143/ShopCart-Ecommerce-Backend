const Sequelize = require('sequelize');
const db = require('../config/db_config');

// https://sequelize.org/docs/v7/models/data-types/
const Category = db.define('category', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Category;