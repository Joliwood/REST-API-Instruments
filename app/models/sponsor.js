const { Model, DataTypes } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class Sponsor extends Model {}

Sponsor.init(
  {
    name: DataTypes.TEXT,
    slogan: DataTypes.TEXT,
  },
  {
    sequelize: getConnexion(),
    tableName: "sponsor",
    modelName: "Sponsor",
  }
);

module.exports = Sponsor;
