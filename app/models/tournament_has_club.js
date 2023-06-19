const { Model, DataTypes } = require("sequelize");

const getConnexion = require("../db/sequelizeConnexion");

class TournamentHasClub extends Model {}

TournamentHasClub.init(
  {
    tournament_id: DataTypes.INTEGER,
    club_t_id: DataTypes.INTEGER,
  },
  {
    sequelize: getConnexion(),
    tableName: "tournament_has_club",
    modelName: "TournamentHasClub",
  }
);

module.exports = TournamentHasClub;
