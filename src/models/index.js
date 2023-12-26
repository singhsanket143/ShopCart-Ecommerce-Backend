const Category = require("./category");
const Product = require("./product");
const User = require("./user");

Product.belongsTo(Category, {foreignKey: 'categoryId'});

Category.hasMany(Product, {foreignKey: 'categoryId'});

module.exports = {
    Product, Category, User
}