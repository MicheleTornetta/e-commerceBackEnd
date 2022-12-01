// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { Sequelize } = require('sequelize');

// Products belongsTo Category 

Product.belongsTo(Category, {
  foreignKey: 'product_id',
  onDelet: 'CASCADE',
});


// Categories have many Products

Categories.HasMany(Product, {
  foreignKey: 'product_id',
  // When we delete a category, delete the associated product.
  onDelete: 'CASCADE',
});

// We can also define the association starting with License
Product.HasOne(Categroy, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)

Product.BelongsToMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});


// Tags belongToMany Products (through ProductTag)

/*Tag.BelongsToMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});*/


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// Package the Category and Product models and export them as an object so we can import them together and use their proper names
module.exports = { Product, Category };
module.exports = { Category, Product };
module.exports = { Product, ProductTag };
module.exports = { Tag, ProductTag, Product };