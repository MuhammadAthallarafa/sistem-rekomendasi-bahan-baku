const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Model Category (tabel kategori bahan baku)
const Category = sequelize.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Category;