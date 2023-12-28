const Sequelize = require('sequelize');
const db = require('../config/db_config');

// https://medium.com/@the_ozmic/how-to-create-many-to-many-relationship-using-sequelize-orm-postgres-on-express-677753a3edb5
// https://medium.com/@tavilesa12/dealing-with-many-to-many-associations-in-sequelize-bddc34201b80

const Cart = db.define('cart', {
    
});

module.exports = Cart;
