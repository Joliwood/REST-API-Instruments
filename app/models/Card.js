const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("./../database");

class Card extends Model {}

Card.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    tableName: "card",
  }
);

module.exports = Card;
