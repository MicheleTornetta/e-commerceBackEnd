const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define fields/columns on model
    // if created by sequelize
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    //link to database connectin
    sequelize,
    // set timestamps to false to remove created_at and updated_at fields
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
