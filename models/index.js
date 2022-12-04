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

// Products belongToMany Tags (through ProductTag) **********HELP*********

// Product.belongsToMany(ProductTag, {
//   foreignKey: 'product_id',
//   onDelete: 'CASCADE',
// });


// Tags belongToMany Products (through ProductTag) **********HELP*********

/*Tag BelongsToMany(ProductTag, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
});*/


// ProductTag.hasOne(Product, {
//   foreignKey: {
//     name: 'product_id',
//     allowNull: false,
//   }
// });
// Product.belongsTo(ProductTag);

// Product.hasOne(ProductTag, {
//   // foreignKey: 'product_tag_id'
// });
// ProductTag.hasMany(Product);

Product.hasMany(ProductTag, {
});
ProductTag.belongsTo(Product, {
});

Tag.hasMany(ProductTag, {
});
ProductTag.belongsTo(Tag, {
});

// ProductTag.hasOne(Tag);
// Tag.hasMany(ProductTag);

Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,

  }
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// Package the Category and Product models and export them as an object so we can import them together and use their proper names
// module.exports = { Product, Category };
// module.exports = { Category, Product };
// module.exports = { Product, ProductTag };
// module.exports = { Tag, ProductTag, Product };