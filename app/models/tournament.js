const { Model, DataTypes } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class Tournament extends Model {}

Tournament.init(
  {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    event_date: DataTypes.DATE,
    sport_id: DataTypes.INTEGER,
  },
  {
    sequelize: getConnexion(),
    tableName: "tournament",
    modelName: "Tournament",
  }
);

module.exports = Tournament;
