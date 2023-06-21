import { Model, DataTypes } from "sequelize";
import getConnexion from "../db/sequelizeConnexion";

class TournamentHasClub extends Model {
  public tournament_id!: number;
  public club_t_id!: number;
}

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

export default TournamentHasClub;
