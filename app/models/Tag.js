const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../database");

class Tag extends Model {}

Tag.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "tag",
  }
);

module.exports = Tag;
