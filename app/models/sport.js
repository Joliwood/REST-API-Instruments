const { Model, DataTypes } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class Sport extends Model {}

Sport.init(
  {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    picture: DataTypes.TEXT,
  },
  {
    sequelize: getConnexion(),
    tableName: "sport",
    modelName: "Sport",
  }
);

module.exports = Sport;
