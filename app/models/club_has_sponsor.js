const { Model, DataTypes } = require("sequelize");

const getConnexion = require("../db/sequelizeConnexion");

class ClubHasSponsor extends Model {}

ClubHasSponsor.init(
  {
    club_sponsor_id: DataTypes.INTEGER,
    sponsor_id: DataTypes.INTEGER,
  },
  {
    sequelize: getConnexion(),
    tableName: "club_has_sponsor",
    modelName: "ClubHasSponsor",
  }
);

module.exports = ClubHasSponsor;
