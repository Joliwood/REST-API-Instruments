const { Model, DataTypes } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class Level extends Model {}

Level.init(
  {
    name: DataTypes.TEXT,
  },
  {
    sequelize: getConnexion(),
    tableName: "level",
    modelName: "Level",
  }
);

module.exports = Level;
