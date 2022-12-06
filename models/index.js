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
  // foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
Category.hasMany(Product);

Product.hasMany(ProductTag);
ProductTag.belongsTo(Product);

Tag.hasMany(ProductTag);
ProductTag.belongsTo(Tag);

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
  Product,
  Category,
  Tag,
  ProductTag,
};

