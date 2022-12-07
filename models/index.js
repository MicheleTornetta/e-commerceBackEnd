// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { Sequelize } = require('sequelize');

// Products belongsTo Category 

// Product.belongsTo(Category, {
//   foreignKey: 'product_id',
//   onDelete: 'CASCADE',
// });


// Categories have many Products

// Category.hasMany(Product, {
//   foreignKey: 'product_id',
//   // When we delete a category, delete the associated product.
//   onDelete: 'CASCADE',
// });

// We can also define the association starting with License
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "cascade",
});

Product.hasMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: "cascade",
});

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id', // i swear
  onDelete: "cascade",
});

Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id',
  onDelete: "cascade",
});

ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
  onDelete: "cascade",
});

// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
  }
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag
  }
});

module.exports = {
  Product, Category, Tag, ProductTag };

