const Sequelize = require('sequelize');

const { DB_NAME, DB_USER, DB_PASS, DB_URL} = require('./server_config');

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_URL,
    dialect: 'mysql'
})

module.exports = sequelize;