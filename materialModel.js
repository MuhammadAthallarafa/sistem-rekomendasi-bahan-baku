const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./categoryModel');

// Model Material (tabel bahan baku)
const MaterialModel = sequelize.define('Material', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quality: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  score: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

// Relasi: satu kategori memiliki banyak material
Category.hasMany(MaterialModel);
MaterialModel.belongsTo(Category);

module.exports = MaterialModel;