const Sequelize = require('sequelize');
const db = require('../config/db_config');

// https://sequelize.org/docs/v7/models/data-types/
const User = db.define('user', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [3, 30],
            isAlphanumeric: true,
        }
    }
});

module.exports = User;

// create a new user api