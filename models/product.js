const { Sequelize, DataTypes } = require("sequelize");
const db = require("../utils/database");

const Product = db.define("product", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  sellingPrice: DataTypes.DOUBLE,
  productName: DataTypes.STRING,
});
module.exports = Product;
