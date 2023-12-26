const Sequelize = require('sequelize');
const db = require('../config/db_config');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/server_config');

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
}, {
    hooks: {
        beforeCreate: function (user) {
            const salt = bcrypt.genSaltSync(+SALT_ROUNDS);
            user.password = bcrypt.hashSync(user.password, salt);
        }
    }
});

module.exports = User;

// create a new user api