const Category = require("./category");
const Product = require("./product");

Product.belongsTo(Category, {foreignKey: 'categoryId'});

Category.hasMany(Product, {foreignKey: 'categoryId'});

module.exports = {
    Product, Category
}